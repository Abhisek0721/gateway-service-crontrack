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
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards'

@Controller('api/v1')
export class IdentityServiceController {
  constructor(private readonly identityService: IdentityService) {}

  // auth
  @Get('auth/*')
  async handleAuthGetRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

  @Post('auth/*')
  async handleAuthPostRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

  @Patch('auth/*')
  async handleAuthPatchRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

  @Put('auth/*')
  async handleAuthPutRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

  @Delete('auth/*')
  async handleAuthDeleteRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

  // workspace
  @Get('workspace/*')
  @UseGuards(JwtAuthGuard)
  async handleWorkspaceGetRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

  @Post('workspace/*')
  @UseGuards(JwtAuthGuard)
  async handleWorkspacePostRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

  @Patch('workspace/*')
  @UseGuards(JwtAuthGuard)
  async handleWorkspacePatchRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

  @Put('workspace/*')
  @UseGuards(JwtAuthGuard)
  async handleWorkspacePutRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

  @Delete('workspace/*')
  @UseGuards(JwtAuthGuard)
  async handleWorkspaceDeleteRequests(@Req() req: Request, @Res() res: Response) {
    return this.identityService.forwardRequest(req, res, req.method);
  }

    // user
    @Get('user/*')
    @UseGuards(JwtAuthGuard)
    async handleUserGetRequests(@Req() req: Request, @Res() res: Response) {
      return this.identityService.forwardRequest(req, res, req.method);
    }
  
    @Post('user/*')
    @UseGuards(JwtAuthGuard)
    async handleUserPostRequests(@Req() req: Request, @Res() res: Response) {
      return this.identityService.forwardRequest(req, res, req.method);
    }
  
    @Patch('user/*')
    @UseGuards(JwtAuthGuard)
    async handleUserPatchRequests(@Req() req: Request, @Res() res: Response) {
      return this.identityService.forwardRequest(req, res, req.method);
    }
  
    @Put('user/*')
    @UseGuards(JwtAuthGuard)
    async handleUserPutRequests(@Req() req: Request, @Res() res: Response) {
      return this.identityService.forwardRequest(req, res, req.method);
    }
  
    @Delete('user/*')
    @UseGuards(JwtAuthGuard)
    async handleUserDeleteRequests(@Req() req: Request, @Res() res: Response) {
      return this.identityService.forwardRequest(req, res, req.method);
    }
}
