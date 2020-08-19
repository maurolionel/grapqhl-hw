import { Database } from '../domain/Database';
import { MovieList } from '../domain/MovieList';
import { User } from '../domain/User';

export function createUserResolver({ users }: Partial<Database>) {
  return ({
    nickname,
    email,
  }: {
    nickname: string;
    email: string;
  }): User['id'] => {
    const movieList = MovieList.create({ movies: [] });
    
    const user = User.create({ email, nickname, movieList });
    
    users.push(user);
    
    return user.id;
  };
}
