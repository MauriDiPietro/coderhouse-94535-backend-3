import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class UsersGuard implements CanActivate {
    private JwtService;
    constructor(JwtService: JwtService);
    private extractTokenFromCookies;
    canActivate(context: ExecutionContext): Promise<boolean>;
}
