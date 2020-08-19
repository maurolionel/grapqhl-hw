import { Database } from '../domain/Database';
import { Movie } from '../domain/Movie';

export function createMovieResolver({ movies }: Partial<Database>) {
  return ({
    name,
    genre,
    year,
  }: {
    name: string;
    genre: string;
    year: number;
  }): Movie['id'] => {
    const movie = Movie.create({ genre, name, year });
    
    movies.push(movie);
    
    return movie.id;
  };
}
