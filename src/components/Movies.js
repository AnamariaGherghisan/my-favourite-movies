import { MovieCard } from "./MovieCard";

export const Movies = ({movies}) => {
  return (
  <div className="d-flex justify-content-evenly flex-wrap">
    {
    movies.map((movie) => {
      return (
      <MovieCard imageUrl={movie.imageUrl} 
      title={movie.title}/>
    );
    })}
    
    
    </div>
    ); 
};
