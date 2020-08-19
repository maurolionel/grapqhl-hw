import { Database } from '../domain/Database';
import { User } from '../domain/User';
import { MovieList } from '../domain/MovieList';
import { Movie } from '../domain/Movie';

const fakeUsers = [
  User.create({
    email: 'mauro.ocorso@etermax.com',
    movieList: MovieList.create({ movies: [] }),
    nickname: 'polacrin',
  }),
  User.create({
    email: 'agustin.rodriguez@etermax.com',
    movieList: MovieList.create({ movies: [] }),
    nickname: 'agus',
  }),
];

const fakeMovies = [
  Movie.create({ name: 'Back to the Future', genre: 'Sci-Fi', year: 1985 }),
  Movie.create({ name: 'Reservoir Dogs', genre: 'Crime', year: 1992 }),
];

export function createDatabase(): Database {
  return { users: fakeUsers, movies: fakeMovies };
}
