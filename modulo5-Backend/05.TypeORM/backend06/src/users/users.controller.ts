import { Controller, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}


    // @Get('id/:id')
    // findById(
    //     @Param("id", ParseIntPipe) id: number
    // ): Promise<User | null> {
    //     return this.userService.findById(id);
    // }


    
}