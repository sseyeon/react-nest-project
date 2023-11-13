import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiOperation({ summary: '회원가입' })
  @ApiCreatedResponse({ description: '성공', type: User })
  @UsePipes(ValidationPipe)
  register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get('/:id')
  @ApiOperation({ summary: '회원 PK 가져오기' })
  @ApiOkResponse({ description: '사용자의 PK를 리턴합니다.' })
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post('/:id/update-password')
  @ApiOperation({ summary: '패스워드 변경' })
  @ApiCreatedResponse({ description: '성공', type: User })
  async updateUserPassword(
    @Param('id', ParseIntPipe) id: number,
    @Body('password') password: string,
  ): Promise<User> {
    return this.userService.updateUserPassword(id, password);
  }
}
