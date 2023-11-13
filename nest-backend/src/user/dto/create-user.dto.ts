import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ description: 'username', example: 'username' })
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(50)
  @Matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
    message: 'Invalid email',
  })
  @ApiProperty({ description: 'email', example: 'email@test.com' })
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  // 영어랑 숫자만 가능한 유효성 체크
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  @ApiProperty({ description: 'password', example: 'password' })
  password: string;
}
