import { useState } from "react";
import { IMovie } from "../models/movie";
import {
  getFavourites,
  saveFavourite,
  removeFavourite,
} from "../services/FavouritesService";

export function useFavourites() {
  const [favourites, setFavourites] = useState<IMovie[]>(getFavourites());

  const addFavourite = (movie: IMovie) => {
    // saves the favorites returned by the service
    setFavourites(saveFavourite(movie));
  };

  const deleteFavourite = (id: number) => {
    setFavourites(removeFavourite(id));
  };

  return { favourites, addFavourite, deleteFavourite };
}
