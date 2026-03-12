import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(uuid: string) {
    return this.userRepository.findOne({where: {uuid}});
  }

  update(uuid: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({uuid: uuid}, {name: updateUserDto.name});
  }

  remove(uuid: string) {
    return this.userRepository.delete({ uuid: uuid });
  }
}
