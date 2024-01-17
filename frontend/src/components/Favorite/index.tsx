import React from 'react';
import './Favorite.scss';

interface IFavoriteProps {
    isFavorite: boolean;
    onToggleFavorite: (isFavorite: boolean) => void;
}


const Favorite: React.FC<IFavoriteProps> = ({ isFavorite, onToggleFavorite }) => {

    return (
        <div className={`Favorite ${isFavorite ? 'is-favorite' : ''}`} onClick={() => onToggleFavorite(!isFavorite)}>
            {isFavorite ? '❤️' : '🤍'}
        </div>
    );
};

export default Favorite;
