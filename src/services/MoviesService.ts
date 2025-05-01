import { IMovie } from "../models/movie";

const MOVIES_BASE_ENDPOINT = "https://api.tvmaze.com/shows";

export async function getMoviesByPage(): Promise<IMovie[]> {
  const response = await fetch(MOVIES_BASE_ENDPOINT);
  if (!response.ok) throw new Error(`Error: ${response.status}`);

  const result = (await response.json()) as IMovie[];

  return result;
}
