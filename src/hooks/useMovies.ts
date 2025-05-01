import { useEffect, useState } from "react";
import { FetchState } from "../models/fetch-state";
import { IMovie } from "../models/movie";
import { getMoviesByPage } from "../services/MoviesService";

export function useMovies(): FetchState<IMovie[] | null> {
  const [data, setData] = useState<IMovie[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Set default states
    setData(null);
    setError(null);
    setLoading(true);

    // Get movies from the server and set the states
    getMoviesByPage()
      .then((movies) => {
        setData(movies);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, error, loading };
}
