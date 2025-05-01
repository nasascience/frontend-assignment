import { IPoppupProp } from "../../models/popup";
import styles from "./Popup.module.css";

export function Popup({ movie, closePopup }: IPoppupProp) {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <label className={styles.closeButton} onClick={() => closePopup()}>
          &times;
        </label>
        <h3>{movie.name}</h3>
        <img
          src={movie.image.original}
          alt={movie.name}
          className={styles.popupImage}
        />
        <div className={styles.popupDetails}>
          <p>
            <strong>Rating:</strong> {movie?.rating?.average}/10
          </p>
          <p>
            <strong>Genre:</strong> {movie?.genres?.join(", ")}
          </p>
          <p>
            <strong>Summary:</strong>
          </p>
          <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
        </div>
      </div>
    </div>
  );
}
