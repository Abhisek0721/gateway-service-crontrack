import { Module } from '@nestjs/common';
import { IdentityServiceModule } from './identity_service_gateway/identityService.module';
import { ConfigModule } from '@nestjs/config';
import { UtilsModule } from './utils/utils.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ContentServiceModule } from './content_service/contentService.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UtilsModule,
    AuthModule,
    IdentityServiceModule,
    ContentServiceModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
