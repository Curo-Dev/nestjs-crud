import { EntityRepository, Repository } from 'typeorm';
import { randomBytes, pbkdf2Sync } from 'crypto';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createOne(user: UserDto) {
    const salt = randomBytes(64).toString('hex');
    const newUser = new User();
    newUser.username = user.username;
    newUser.password = pbkdf2Sync(
      user.password,
      salt,
      10000,
      64,
      'SHA512',
    ).toString('hex');
    newUser.salt = salt;

    return this.save(newUser);
  }
}
