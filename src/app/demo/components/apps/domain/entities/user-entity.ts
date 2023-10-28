import { DomainEntity } from './base/domain-entity';
export class UserEntity extends DomainEntity {
  channel?:string;
  email?: string;
  password?: string;
}
