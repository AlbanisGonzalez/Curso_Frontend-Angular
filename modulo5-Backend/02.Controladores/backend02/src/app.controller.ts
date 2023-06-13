import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  getHello2(): string {
    return 'Hola2 desde nestjs';
  }
  @Get('hello3')
  getHello3(): string {
    return 'Hola3 desde nestjs';
  }
  @Get('hello4')
  getHello4(): number {
    return 100;
  }
  @Get('hello5')
  getHello5(): any {
    return {
      id: 1,
      fullName: 'HelloMan',
      age: 25,
    };
  }
  @Get('hello6')
  getHello6(): any {
    return [
      {
        id: 1,
        fullName: 'HelloWoman',
        age: 25,
      },
      {
        id: 2,
        fullName: 'HelloMan',
        age: 25,
      },
      {
        id: 3,
        fullName: 'HelloMachine',
        age: 25,
      },
    ];
  }
}
