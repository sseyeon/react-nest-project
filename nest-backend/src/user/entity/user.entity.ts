import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  username: string;
  @Column({ length: 500 })
  email: string;
  @Column({ length: 500 })
  password: string;
}
