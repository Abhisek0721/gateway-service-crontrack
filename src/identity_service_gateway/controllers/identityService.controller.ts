import { IdentityService } from '../services/identityService.service';
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
export class IdentityServiceController {
  constructor(private readonly identityService: IdentityService) {}

  // auth
  @Get('auth/*')
  async handleAuthGetRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'GET');
  }

  @Post('auth/*')
  async handleAuthPostRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'POST');
  }

  @Patch('auth/*')
  async handleAuthPatchRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'PATCH');
  }

  @Put('auth/*')
  async handleAuthPutRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'PUT');
  }

  @Delete('auth/*')
  async handleAuthDeleteRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'DELETE');
  }

  // workspace
  @Get('workspace/*')
  async handleWorkspaceGetRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'GET');
  }

  @Post('workspace/*')
  async handleWorkspacePostRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'POST');
  }

  @Patch('workspace/*')
  async handleWorkspacePatchRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'PATCH');
  }

  @Put('workspace/*')
  async handleWorkspacePutRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'PUT');
  }

  @Delete('workspace/*')
  async handleWorkspaceDeleteRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, 'DELETE');
  }
}
