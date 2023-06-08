import React, { useState } from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

export const MovieCard = ({ imageUrl, title }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card movie-card m-3">
      <div className="movie-card-overlay">
        <button type="button" className="btn btn-primary" onClick={handleAddToFavorites}>
          {isFavorite ? <RiSubtractLine /> : <RiAddLine />}
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};