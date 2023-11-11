import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  /** Login a user
   * @param email
   * @param password
   * @returns String
   */
  async login(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDto;
    const user = await this.userService.getUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 (Secert + Payload)
      const payload = { email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }

  /** Refresh access token
   * @param accessToken
   * @returns String
   */
  async refreshAccessToken(
    accessToken: string,
  ): Promise<{ newAccessToken: string }> {
    try {
      const decoded = this.jwtService.verify(accessToken, {
        ignoreExpiration: true,
      });
      const payload = { email: decoded.email };
      const newAccessToken = this.jwtService.sign(payload, {
        expiresIn: jwtConstants.expiresTime,
      }); // 새로운 토큰 발급

      return { newAccessToken };
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
