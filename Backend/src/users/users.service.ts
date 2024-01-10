import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(CreateUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(CreateUserDto);
    return await this.userRepository.save(user);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user: User = {
      id: id,
      name: updateUserDto.name,
      email: updateUserDto.email,
      password: updateUserDto.password,
    };
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
