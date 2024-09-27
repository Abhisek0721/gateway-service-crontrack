import { HttpService } from '@nestjs/axios';
import { BadGatewayException, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { lastValueFrom } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class IdentityService {
  private BASE_URL: string;
  constructor(private readonly httpService: HttpService) {
    this.BASE_URL = `${process.env.BASE_URL_IDENTITY_SERVICE}`;
  }

  async forwardRequest(req: Request, res: Response, method: string) {
    try {
      const headers = req.headers
      delete headers['content-length'];
      let observable;
      let queryParams = req.url.includes('?')?`?${req.url.split('?')[1]}`:'';
      let url = `${this.BASE_URL}${req.originalUrl}${queryParams}`;
      
      switch (method) {
        case 'GET':
          observable = this.httpService.get(
            url,
            { headers, timeout: 10000 }
          );
          break;
        case 'POST':
          observable = this.httpService.post(
            url,
            req.body,
            { headers, timeout: 10000 }
          );
          break;
        case 'PATCH':
          observable = this.httpService.patch(
            url,
            req.body,
            { headers, timeout: 10000 }
          );
          break;
        case 'PUT':
          observable = this.httpService.put(
            url,
            req.body,
            { headers, timeout: 10000 }
          );
          break;
        case 'DELETE':
          observable = this.httpService.delete(
            url,
            { headers, timeout: 10000 }
          );
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      const response: AxiosResponse = await lastValueFrom(observable);
      return res.status(response.status).header(response.headers).send(response.data);
    } catch (error) {
      if (error.isAxiosError) {
        const axiosError = error as AxiosError;
        const statusCode = axiosError.response?.status || 500;

        if (statusCode === 502) {
          // Custom handling for 502 Bad Gateway
          console.error(
            '502 Bad Gateway: Identity service is down or unreachable',
          );
          throw new BadGatewayException()
        }

        if (!axiosError.response) {
          // Handle network errors or no response scenarios
          console.error('Network error or no response from Identity service');
          throw new BadGatewayException()
        }
        return res.status(statusCode).send(axiosError.response.data);
      }

      throw new InternalServerErrorException();
    }
  }
}
