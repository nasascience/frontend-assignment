import { IMovie } from "./movie";

export interface IPoppupProp {
  movie: IMovie;
  closePopup: () => void;
}
