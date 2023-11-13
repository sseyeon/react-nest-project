import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UnauthorizedException,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthGuard } from './auth.gards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.login(authCredentialsDto);
  }

  @Get('/check-token')
  @UseGuards(AuthGuard)
  checkToken(@Request() req) {
    return req.email;
  }

  @Post('/refresh-token')
  async refreshAccessToken(
    @Body('accessToken') accessToken: string,
  ): Promise<{ newAccessToken: string }> {
    try {
      const result = await this.authService.refreshAccessToken(accessToken);
      return result;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw new UnauthorizedException(error.message);
      }
      throw error;
    }
  }
}
