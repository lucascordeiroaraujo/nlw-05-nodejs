import { EntityRepository, Repository } from 'typeorm'

import { User } from '../../Users/entities/User'

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository }
