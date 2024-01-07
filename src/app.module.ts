import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TestController } from './test.controller';
import { RootModule } from './root/root.module';
import { LogMiddleware } from './root/log.middleware';

@Module({
  controllers: [TestController],
  imports: [RootModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes("/root/:id",  "/")
  }
}