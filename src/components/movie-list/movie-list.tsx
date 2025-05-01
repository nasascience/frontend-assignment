import { IMovie } from "../../models/movie";
import { IMovieList } from "../../models/movie-list";
import { MovieCard } from "../movie-card/movie-card";
import styles from "./movie-list.module.css";

export function MovieList(props: IMovieList) {
  // set default message depending on the props
  const message = props.favourites
    ? "No Favourites Selected"
    : "No Movies to display";

  // check if the movies array is empty and if so, return a message
  if (props.movies?.length === 0)
    return (
      <>
        <div className={styles.listComtainer}>
          <h3 className={styles.title}>{props.title}</h3>
          <div className={styles.messageAlign}>{message}</div>
        </div>
      </>
    );

  return (
    <>
      <div className={styles.listComtainer}>
        <h3 className={styles.title}>{props.title}</h3>
        <div
          className={
            props.wrap ? styles.moviesWrapContainer : styles.moviesContainer
          }
        >
          {props.movies?.map((movie: IMovie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={props.favourites}
              onAddFavourite={props.onAddFavourite}
              onRemoveFavourite={props.onRemoveFavourite}
            />
          ))}
        </div>
      </div>
    </>
  );
}
