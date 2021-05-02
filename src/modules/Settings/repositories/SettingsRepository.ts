import { EntityRepository, Repository } from 'typeorm'

import { Setting } from '@modules/Settings/entities/Setting'

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository }
