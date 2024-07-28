import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

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
      }

      const response: AxiosResponse = await lastValueFrom(observable);
      return res.status(response.status).send(response.data);
    } catch (error) {
      return res
        .status(error.response?.status || 500)
        .send(error.response?.data || error.message);
    }
  }
}
