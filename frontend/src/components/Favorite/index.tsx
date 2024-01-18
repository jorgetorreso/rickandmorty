import React from 'react';
import './Favorite.scss';

interface IFavoriteProps {
    isFavorite: boolean;
    onToggleFavorite: (isFavorite: boolean) => void;
}

const Favorite: React.FC<IFavoriteProps> = ({ isFavorite, onToggleFavorite }) => {
    return (
        <div title='add to favorite' className={`Favorite ${isFavorite ? 'is-favorite' : ''}`} onClick={() => onToggleFavorite(!isFavorite)}>
            <span>{isFavorite ? '❤️' : '🤍'}</span>
        </div>
    );
};

export default Favorite;
