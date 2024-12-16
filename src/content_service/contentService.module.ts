import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from 'src/auth/auth.module';
import { ContentServiceController } from './controllers/contentService.controller';
import { ContentService } from './services/contentService.service';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [ContentServiceController],
  providers: [ContentService],
})
export class ContentServiceModule {}
