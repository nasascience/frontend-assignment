import { IMovie } from "./movie";

export interface IMovieList {
  movies: IMovie[] | null;
  title: string;
  onAddFavourite: (movie: IMovie) => void;
  onRemoveFavourite: (id: number) => void;
  favourites: boolean;
  wrap?: boolean;
}
