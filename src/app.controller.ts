import { Controller, Get } from '@nestjs/common';
import { AppService, data } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('port')
  sayPort(): Promise<data> {
    return this.appService.sayPort();
  }
}
