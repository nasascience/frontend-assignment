import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { MovieList } from "./components/movie-list/movie-list";
import { IMovie } from "./models/movie";
import { useFavourites } from "./hooks/useFavourites";
import Loader from "./components/loader/loader";
const PAGE_LIMIT = 20;

function App() {
  // Set the initial state for the start index
  const [startIndex, setStartIndex] = useState<number>(-PAGE_LIMIT);
  // Get movies and favourites using custom hooks
  const { data, error, loading } = useMovies();
  const { favourites, addFavourite, deleteFavourite } = useFavourites();

  const [movies, setMovies] = useState<IMovie[] | null>(data);

  const loaderRef = useRef<HTMLDivElement>(null);

  // Handle the infinite scroll
  // This function will be called when the observer detects an intersection
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries; // extract the first observed element
      if (target.isIntersecting && !loading) {
        // sets the start Index after setting the data in order to load new movies
        setStartIndex((prev) => prev + PAGE_LIMIT);
      }
    },
    [loading]
  );

  // Setup Observer to observe the loaderRef element
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null, // observes the interaction with the viewport
      rootMargin: "20px",
      threshold: 0.1,
    });

    // Observes the element if exists
    if (loaderRef.current) observer.observe(loaderRef.current);

    // Cleanup function to stop observing the element when the component unmounts
    return () => {
      // stops observing to avoid memory leak
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);

  // Handle app pagination in order to get up to 20 films on infinite scroll
  useEffect(() => {
    if (!data || startIndex >= data.length) return;

    const end = startIndex + PAGE_LIMIT;
    const nextBatch = data.slice(startIndex, end);
    setMovies((movies) => [...(movies || []), ...nextBatch]);
  }, [startIndex]);

  if (error) return <h1>{error}</h1>;
  return (
    <>
      {loading && <Loader />}

      <MovieList
        movies={favourites}
        title={"Favourites"}
        favourites={true}
        onAddFavourite={addFavourite}
        onRemoveFavourite={deleteFavourite}
      />
      <MovieList
        movies={movies}
        title={"Movies"}
        favourites={false}
        onAddFavourite={addFavourite}
        onRemoveFavourite={deleteFavourite}
        wrap={true}
      />
      <div ref={loaderRef}>All loaded</div>
    </>
  );
}

export default App;
