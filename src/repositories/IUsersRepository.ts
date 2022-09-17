import { User } from '@entities/User'

export interface IUsersRepository {
  list(): Promise<User[]>
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<User>;
}
