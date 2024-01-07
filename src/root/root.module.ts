import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RootService } from './root.service';
import { RootController } from './root.controller';
import { LogMiddleware } from './log.middleware';

@Module({
  controllers: [RootController],
  providers: [RootService],
  exports: [RootService]
})
export class RootModule{}
