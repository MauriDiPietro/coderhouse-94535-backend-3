import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user';
import { JwtService } from '@nestjs/jwt';
import { RequestUser, UserLogin } from './types/user';
export declare class UsersService {
    private UserModel;
    private JwtService;
    constructor(UserModel: Model<UserDocument>, JwtService: JwtService);
    getByEmail(email: string): Promise<UserDocument | null>;
    register(createUserDto: CreateUserDto): Promise<UserDocument | null>;
    generateToken(user: UserDocument): string;
    login(user: UserLogin): Promise<string | null>;
    profile(req: RequestUser): import("./types/user").UserPayload;
}
