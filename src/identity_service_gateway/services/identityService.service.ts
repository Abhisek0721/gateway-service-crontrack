import { HttpService } from '@nestjs/axios';
import { BadGatewayException, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Request, Response } from 'express';
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
      let observable;

      switch (method) {
        case 'GET':
          observable = this.httpService.get(
            `${this.BASE_URL}${req.originalUrl}`,
          );
          break;
        case 'POST':
          observable = this.httpService.post(
            `${this.BASE_URL}${req.originalUrl}`,
            req.body,
          );
          break;
        case 'PATCH':
          observable = this.httpService.patch(
            `${this.BASE_URL}${req.originalUrl}`,
            req.body,
          );
          break;
        case 'PUT':
          observable = this.httpService.put(
            `${this.BASE_URL}${req.originalUrl}`,
            req.body,
          );
          break;
        case 'DELETE':
          observable = this.httpService.delete(
            `${this.BASE_URL}${req.originalUrl}`,
          );
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      const response: AxiosResponse = await lastValueFrom(observable);
      return res.status(response.status).send(response.data);
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

        console.error(`Error from Identity service: ${axiosError.message}`);
        throw new BadGatewayException()
      }

      throw new InternalServerErrorException();
    }
  }
}
