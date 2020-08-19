import { Database } from '../domain/Database';
import { Movie } from '../domain/Movie';

export function movieResolver({ movies }: Partial<Database>) {
  return ({ id }: { id: string }): Movie => {
    return movies.find((movie) => movie.id === id);
  };
}
