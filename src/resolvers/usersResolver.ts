import { Database } from '../domain/Database';
import { User } from '../domain/User';

export function usersResolver({ users }: Partial<Database>) {
  return (): User[] => {
    return users;
  };
}
