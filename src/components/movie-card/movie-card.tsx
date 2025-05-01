import { useState } from "react";
import { IMovie, IMovieProp } from "../../models/movie";
import styles from "./movie-card.module.css";
import { Popup } from "../popup/popup";
export function MovieCard(props: IMovieProp) {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const addFavorite = (movie: IMovie) => {
    if (props.onAddFavourite) props.onAddFavourite(movie);
  };

  const deleteFavorite = (movie: IMovie) => {
    if (props.onRemoveFavourite) props.onRemoveFavourite(movie.id);
  };

  const onClosePopup = () => {
    setShowDetails(false);
  };

  return (
    <>
      {showDetails && <Popup movie={props.movie} closePopup={onClosePopup} />}
      <div className={styles.card}>
        {!props.isFavorite ? (
          <img
            onClick={() => addFavorite(props.movie)}
            className={styles.bookmark}
            src="src/assets/images/add-bookmark.png"
            alt="movie bookmark"
          ></img>
        ) : (
          <></>
        )}
        {props.isFavorite ? (
          <img
            onClick={() => deleteFavorite(props.movie)}
            className={styles.delete}
            src="src/assets/images/delete.png"
            alt="delete bookmark movie"
          ></img>
        ) : (
          <></>
        )}
        <div onClick={() => setShowDetails(!showDetails)}>
          <img src={props.movie.image.medium} alt="movie"></img>
          <span>{props.movie.name}</span>
          <span
            className={styles.summary}
            dangerouslySetInnerHTML={{ __html: props.movie.summary }}
          ></span>
        </div>
      </div>
    </>
  );
}
