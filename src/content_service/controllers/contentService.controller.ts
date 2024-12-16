import { ContentService } from '../services/contentService.service';
import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';


@Controller('api/v1')
export class ContentServiceController {
  constructor(private readonly contentService: ContentService) {}

  // social-auth
  @Get('social-auth/*')
  async handleAuthGetRequests(@Req() req: Request, @Res() res: Response) {
    return this.contentService.forwardRequest(req, res, req.method);
  }

  @Post('social-auth/*')
  async handleAuthPostRequests(@Req() req: Request, @Res() res: Response) {
    return this.contentService.forwardRequest(req, res, req.method);
  }

  @Patch('social-auth/*')
  async handleAuthPatchRequests(@Req() req: Request, @Res() res: Response) {
    return this.contentService.forwardRequest(req, res, req.method);
  }

  @Put('social-auth/*')
  async handleAuthPutRequests(@Req() req: Request, @Res() res: Response) {
    return this.contentService.forwardRequest(req, res, req.method);
  }

  @Delete('social-auth/*')
  async handleAuthDeleteRequests(@Req() req: Request, @Res() res: Response) {
    return this.contentService.forwardRequest(req, res, req.method);
  }

}