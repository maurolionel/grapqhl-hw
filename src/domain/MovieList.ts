import { Movie } from './Movie';

interface MovieListProps {
  movies: Movie[];
}

export class MovieList {
  public get movies(): Movie[] {
    return this.props.movies;
  }

  private constructor(private props: MovieListProps) {}

  public static create(props: MovieListProps): MovieList {
    return new MovieList(props);
  }

  public addMovie(movie: Movie): void {
    this.props.movies = this.movies.concat(movie);
  }

  public removeMovie({ id }: Movie): void {
    this.props.movies = this.movies.filter((movie) => movie.id !== id);
  }
}
