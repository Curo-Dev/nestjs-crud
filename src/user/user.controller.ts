import { Controller, Get } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    const user = new UserDto();
    user.username = 'curo-dev';
    user.password = 'asdasda';
    return this.userService.createOne(user);
  }
}
