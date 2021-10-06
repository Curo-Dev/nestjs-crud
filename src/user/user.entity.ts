import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'char',
    length: 255,
    name: 'username',
  })
  username: string;

  @Column({
    type: 'char',
    length: 128,
    name: 'password',
  })
  password: string;

  @Column({
    type: 'char',
    length: 128,
    name: 'salt',
  })
  salt: string;
}
