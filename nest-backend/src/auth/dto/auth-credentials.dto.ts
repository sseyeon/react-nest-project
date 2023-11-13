import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(50)
  @Matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
    message: 'Invalid email',
  })
  @ApiProperty({ description: 'email', example: 'email@test.com' })
  email: string;

  @IsString()
  @MaxLength(20)
  @MinLength(8)
  // 영어랑 숫자만 가능한 유효성 체크
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  @ApiProperty({ description: 'password', example: 'password' })
  password: string;
}
