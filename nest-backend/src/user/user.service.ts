import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  /**
   * Create a new user
   * @param CreateUserDto
   * @returns Promise<User> - the newly created user
   */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...rest } = createUserDto;

    // salt를 생성한다.
    const salt = await bcrypt.genSalt();
    // 비밀번호를 해싱한다.
    const hashedPassword = await bcrypt.hash(password, salt);

    // 해싱된 비밀번호와 나머지 유저 정보를 사용하여 새로운 User 엔터티를 생성한다.
    const newUser = this.userRepository.create({
      ...rest,
      password: hashedPassword,
    });

    try {
      // 새로운 유저를 저장하고 반환한다.
      return this.userRepository.save(newUser);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.message.includes('UQ_e12875dfb3b1d92d7d7c5377e22')
      ) {
        // 중복된 키 오류가 UQ_e12875dfb3b1d92d7d7c5377e22 제약 조건에 해당하는 경우
        throw new ConflictException('username already exists');
      } else {
        // 다른 유형의 오류인 경우
        throw new InternalServerErrorException(error);
      }
    }
  }
  /**
   * Get a user by email
   * @param email
   * @returns Promise<User> - the user with the given email
   * @throws NotFoundException - if the user with the given email does not exist
   */
  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  /**
   * Get a user by id
   * @param id
   * @returns Promise<User> - the user with the given id
   * @throws NotFoundException - if the user with the given id does not exist
   */
  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  /**
   * Update a user's password
   * @param id
   * @param password
   * @returns Promise<User> - the updated user
   * @throws NotFoundException - if the user with the given id does not exist
   */
  async updateUserPassword(id: number, password: string): Promise<User> {
    const user = await this.getUserById(id);
    // 비밀번호를 해싱한다.
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // 해싱된 비밀번호를 사용하여 기존 유저의 비밀번호를 업데이트합니다.
    user.password = hashedPassword;
    return this.userRepository.save(user);
  }
}
