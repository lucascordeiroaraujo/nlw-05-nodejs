import { SettingsRepository } from '@modules/Settings/repositories/SettingsRepository'

import { getCustomRepository, Repository } from 'typeorm'

import { Setting } from '@modules/Settings/entities/Setting'

interface ISettingsCreateProps {
  chat: boolean
  username: string
}

interface IFindByUsernameProps {
  username: string
}

interface IUpdateProps {
  username: string
  chat: boolean
}

class SettingsService {
  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create({ chat, username }: ISettingsCreateProps) {
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    })

    if (userAlreadyExists) {
      throw new Error('User already exists!')
    }

    const settings = this.settingsRepository.create({ chat, username })

    await this.settingsRepository.save(settings)

    return settings
  }

  async findByUsername({ username }: IFindByUsernameProps) {
    const settings = await this.settingsRepository.findOne({
      username,
    })

    return settings
  }

  async update({ username, chat }: IUpdateProps) {
    await this.settingsRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where('username = :userename', { username })
      .execute()
  }
}

export { SettingsService }
