import { User } from '@entities/User'
import { IUsersRepository } from '@repositories/IUsersRepository'

class UsersRepository implements IUsersRepository {
  private users: User[] = []

  async list (): Promise<User[]> {
    return this.users
  }

  async findByEmail (email: string): Promise<User> {
    return this.users.find(user => user.email === email)
  }

  async save (user: User): Promise<User> {
    this.users.push(user)
    return user
  }
}

export { UsersRepository }
