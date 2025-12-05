import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import type { RequestUser, UserLogin } from './types/user';
import type { Response } from 'express';
import { UsersGuard } from './users.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.register(createUserDto);
  }

  @Post('/login')
  async login(@Body() user: UserLogin, @Res() res: Response) {
    const response = await this.usersService.login(user);
    res
      .cookie('token', response, { httpOnly: true })
      .json({ message: 'Login OK', token: response });
  }

  @Get('/profile')
  @UseGuards(UsersGuard)
  profile(@Request() req: RequestUser){
    return this.usersService.profile(req);
  }
}
