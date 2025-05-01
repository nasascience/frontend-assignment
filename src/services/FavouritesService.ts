import { IMovie } from "../models/movie";

// Save the Favourite in the DB
export function saveFavourite(movie: IMovie): IMovie[] {
  const favouritesStorage = localStorage.getItem("favourites");
  let favourites = JSON.parse(favouritesStorage ?? "[]") as IMovie[];

  // Only Save the favourite if this is not already Added
  if (favouritesStorage) {
    if (!favourites.map((x) => x.id).includes(movie.id)) {
      favourites.push(movie);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  } else {
    // Save the favourite creating the Storate
    favourites.push(movie);
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }

  return favourites;
}

// Delete and update favourites store
export function removeFavourite(id: number): IMovie[] {
  const favouritesStorage = localStorage.getItem("favourites");
  let favourites = JSON.parse(favouritesStorage ?? "[]") as IMovie[];

  const currentFavourites = favourites.filter((x) => x.id !== id);
  localStorage.setItem("favourites", JSON.stringify(currentFavourites));
  return currentFavourites;
}

// Get all Favourites
export function getFavourites(): IMovie[] {
  const favouritesStorage = localStorage.getItem("favourites");
  let favourites = JSON.parse(favouritesStorage ?? "[]") as IMovie[];

  return favourites;
}
