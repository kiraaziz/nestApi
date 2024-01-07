import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { RootService } from './root/root.service';

@Controller("/")
export class TestController {
  constructor(private readonly appService: RootService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
