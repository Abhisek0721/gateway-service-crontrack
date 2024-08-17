import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { IdentityServiceController } from './controllers/identityService.controller';
import { IdentityService } from './services/identityService.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [IdentityServiceController],
  providers: [IdentityService],
})
export class IdentityServiceModule {}
