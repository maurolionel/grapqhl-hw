import { Movie } from './Movie';
import { MovieList } from './MovieList';
import { randomId } from '../utils';

interface UserProps {
  nickname: string;
  email: string;
  movieList: MovieList;
}

export class User {
  public get id(): string {
    return this._id;
  }

  public get nickname(): string {
    return this.props.nickname;
  }

  public get email(): string {
    return this.props.email;
  }

  public get myList(): Movie[] {
    return this.movieList.movies;
  }

  private constructor(private props: UserProps, private _id?: string) {}

  public static create(props: UserProps, id?: string): User {
    return new User(props, id || randomId());
  }

  public addMovieToMyList(movie: Movie): void {
    this.movieList.addMovie(movie);
  }

  public removeMovieFromMyList(movie: Movie): void {
    this.movieList.removeMovie(movie);
  }

  private get movieList(): MovieList {
    return this.props.movieList;
  }
}
