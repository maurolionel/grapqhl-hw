import { randomId } from '../utils';

interface MovieProps {
  name: string;
  genre: string;
  year: number;
}

export class Movie {
  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this.props.name;
  }

  public get genre(): string {
    return this.props.genre;
  }

  public get year(): number {
    return this.props.year;
  }

  private constructor(private props: MovieProps, private _id?: string) {}

  public static create(props: MovieProps, id?: string): Movie {
    return new Movie(props, id || randomId());
  }
}
