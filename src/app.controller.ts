import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): { name: String } {
    return { name: "Kira Sama" }
  }

  @Put(":id")
  putHello(@Param("id") id: string): { name: String }{
    return {name: id}
  }
}
