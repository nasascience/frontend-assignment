export interface IMovie {
  id: number;
  name: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  genres?: string[];
  language?: string;
  status?: string;
  premiered?: string;
  ended?: string;
  rating?: {
    average: number | null;
  };
  officialSite?: string | null;
}

export interface IMovieProp {
  movie: IMovie;
  isFavorite: boolean;
  onAddFavourite?: (movie: IMovie) => void;
  onRemoveFavourite?: (id: number) => void;
}
