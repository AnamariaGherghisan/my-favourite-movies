import React from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

export const FeaturedMoviesCarousel = ({ movies }) => {
  return (
    <div className="carousel">
      <h2 className="carousel-title">Featured Movies</h2>
      <div className="carousel-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

