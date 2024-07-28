import { Module } from '@nestjs/common';
import { IdentityServiceModule } from './identity_service_gateway/identityService.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    IdentityServiceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
