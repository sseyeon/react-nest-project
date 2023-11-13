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
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: '로그인' })
  @ApiCreatedResponse({ description: '성공', type: String })
  login(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.login(authCredentialsDto);
  }

  @Get('/check-token')
  @ApiOperation({ summary: '토큰 확인' })
  @ApiCreatedResponse({ description: '성공', type: String })
  @UseGuards(AuthGuard)
  checkToken(@Request() req) {
    return req.email;
  }

  @Post('/refresh-token')
  @ApiOperation({ summary: '토큰 갱신' })
  @ApiCreatedResponse({ description: '성공', type: String })
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
