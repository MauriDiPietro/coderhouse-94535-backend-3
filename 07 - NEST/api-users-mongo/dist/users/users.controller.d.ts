import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import type { RequestUser, UserLogin } from './types/user';
import type { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<import("./schema/user").UserDocument | null>;
    login(user: UserLogin, res: Response): Promise<void>;
    profile(req: RequestUser): import("./types/user").UserPayload;
}
