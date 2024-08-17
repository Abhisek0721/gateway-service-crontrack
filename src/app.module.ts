import { Module } from '@nestjs/common';
import { IdentityServiceModule } from './identity_service_gateway/identityService.module';
import { ConfigModule } from '@nestjs/config';
import { UtilsModule } from './utils/utils.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    IdentityServiceModule,
    UtilsModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
