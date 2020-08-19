import { Database } from '../domain/Database';
import { addMovieToUserListResolver } from './addMovieToUserListResolver';
import { createMovieResolver } from './createMovieResolver';
import { createUserResolver } from './createUserResolver';
import { movieResolver } from './movieResolver';
import { moviesResolver } from './moviesResolver';
import { removeMovieFromUserListResolver } from './removeMovieFromUserListResolver';
import { userResolver } from './userResolver';
import { usersResolver } from './usersResolver';

export function getRootResolver({ users, movies }: Database) {
  return {
    createMovie: createMovieResolver({ movies }),
    movie: movieResolver({ movies }),
    movies: moviesResolver({ movies }),
    createUser: createUserResolver({ users }),
    user: userResolver({ users }),
    users: usersResolver({ users }),
    addMovieToUserList: addMovieToUserListResolver({ movies, users }),
    removeMovieFromUserList: removeMovieFromUserListResolver({ movies, users }),
  };
}
