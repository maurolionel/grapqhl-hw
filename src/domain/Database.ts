import { User } from './User';
import { Movie } from './Movie';

export interface Database {
  users: User[];
  movies: Movie[];
}
