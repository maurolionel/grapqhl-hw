import { Database } from '../domain/Database';
import { Movie } from '../domain/Movie';

export function moviesResolver({ movies }: Partial<Database>) {
  return (): Movie[] => {
    return movies;
  };
}
