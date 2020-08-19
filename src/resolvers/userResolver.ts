import { Database } from '../domain/Database';
import { User } from '../domain/User';

export function userResolver({ users }: Partial<Database>) {
  return ({ id }: { id: string }): User => {
    const user = users.find((user) => user.id === id);
    if (!user) throw 'no user'
    return user;
  };
}
