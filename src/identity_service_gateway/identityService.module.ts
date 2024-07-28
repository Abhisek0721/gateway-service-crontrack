import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { IdentityServiceController } from './controllers/identityService.controller';
import { IdentityService } from './services/identityService.service';

@Module({
  imports: [HttpModule],
  controllers: [IdentityServiceController],
  providers: [IdentityService],
})
export class IdentityServiceModule {}
