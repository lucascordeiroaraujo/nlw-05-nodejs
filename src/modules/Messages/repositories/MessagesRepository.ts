import { EntityRepository, Repository } from 'typeorm'

import { Message } from '@modules/Messages/entities/Message'

@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {}

export { MessagesRepository }
