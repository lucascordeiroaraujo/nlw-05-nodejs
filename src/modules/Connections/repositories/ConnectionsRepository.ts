import { EntityRepository, Repository } from 'typeorm'

import { Connection } from '@modules/Connections/entities/Connection'

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository }
