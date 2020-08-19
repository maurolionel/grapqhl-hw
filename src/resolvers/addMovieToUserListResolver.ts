import { Database } from '../domain/Database';
import { User } from '../domain/User';

export function addMovieToUserListResolver({
  movies,
  users,
}: Partial<Database>) {
  return ({ movieId, userId }: { movieId: string; userId: string }): User => {
    const movie = movies.find((movie) => movie.id === movieId);
    
    const user = users.find((user) => user.id === userId);
    
    user.addMovieToMyList(movie);
    
    return user;
  };
}
