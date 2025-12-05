import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user';
import { JwtService } from '@nestjs/jwt';
import { createHash, isValidPassword } from './utils/hash';
import { RequestUser, UserLogin } from './types/user';
import { Request } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    private JwtService: JwtService,
  ) {}

  async getByEmail(email: string): Promise<UserDocument | null> {
    return await this.UserModel.findOne({ email });
  }

  async register(createUserDto: CreateUserDto): Promise<UserDocument | null> {
    const { email, password } = createUserDto;
    const existUser = await this.getByEmail(email);
    if (existUser) throw new NotFoundException('User already exists');
    return await this.UserModel.create({
      ...createUserDto,
      password: createHash(password),
    });
  }

  generateToken(user: UserDocument): string{
    const payload = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role,
    }
    return this.JwtService.sign(payload);
  }

  async login(user: UserLogin): Promise<string | null> {
    const { email, password } = user;
    const existUser = await this.getByEmail(email);
    if(!existUser) throw new BadRequestException('Invalid credentials')
    const passValid = isValidPassword(password, existUser.password);
    if(!passValid) throw new BadRequestException('Invalid credentials')
    return this.generateToken(existUser);
  }

  profile(req: RequestUser){
    return req.user
  }
}
