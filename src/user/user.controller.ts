import { CreateUserDto } from './dtos/createUser.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async getAllUsers() {
    return JSON.stringify({ test: 'abc' });
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return createUser;
  }
}
