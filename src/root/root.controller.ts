import { Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { RootService } from './root.service';
import { Request } from 'express';

@Controller("/root/:id")
export class RootController {
  constructor(private readonly appService: RootService) { }

  @Get()
  getHello(@Req() req: {value: string}): string {
    console.log(req.value)
    return this.appService.getHello();
  }
}
