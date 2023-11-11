import { UserService } from '../user/user.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    refreshAccessToken(accessToken: string): Promise<{
        newAccessToken: string;
    }>;
}
