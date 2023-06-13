/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService){}

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

  //URL con parámetros

  @Get('hello/:id')
  getHelloById(@Param('id') id: string): any {
    console.log(id);
    return {
      id: id,
      fullName: 'hello',
    };
  }

  //Con más de un parámetro: mostrar nombre completo
  //http://localhost:3000/first-name/Alba/last-name/Gonzalez
  @Get('first-name/:firstName/last-name/:lastName')
  getFullName(
    @Param('firstName') firstName: string,
    @Param('lastName') lastName: string,
  ): any {
    console.log(firstName);
    console.log(lastName);

    return {
      fullName: `${firstName} ${lastName}`,
      saludo: `Hola ${firstName}`,
    };
  }
  @Get('hello-param/:id1/:id2')
  getHelloParam(@Param() params: any): void {
    console.log(params.id1);
    console.log(params.id2);
  }
}
