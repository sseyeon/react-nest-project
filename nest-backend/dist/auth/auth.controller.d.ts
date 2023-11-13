import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    checkToken(req: any): any;
    refreshAccessToken(accessToken: string): Promise<{
        newAccessToken: string;
    }>;
}
