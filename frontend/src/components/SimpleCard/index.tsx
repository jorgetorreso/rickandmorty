import React from "react";
import { ICharacter } from "@/interfaces/characters";
import './SimpleCard.scss';
import Favorite from "../Favorite";

interface ISimpleCardProps {
    item: ICharacter;
    onToggleFavorite: (id: string, isFavorite: boolean) => void;
}

const SimpleCard: React.FC<ISimpleCardProps> = ({ item, onToggleFavorite }) => {
    const handleToggleFavorite = (isFavorite: boolean) => {
        onToggleFavorite(item?.id.toString(), isFavorite)
    }
    return (
        <div className="SimpleCard" key={`SimpleCard_${item.id}`}>
            <div className="SimpleCard__wrapper">
                <div className="SimpleCard__cover">
                    <div className="ribbon">.
                        <span>
                            {item.species === "Human"
                                ? "🤩 Recommended"
                                : "😵‍💫 Not recommended"}
                        </span>
                    </div>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="SimpleCard__info">
                    <Favorite isFavorite={item.isFavorite} onToggleFavorite={handleToggleFavorite} />
                    <h2>{item.name}</h2>
                    <p>
                        <b>Species:</b> {item.species}
                    </p>
                    <p>
                        <b>Status:</b> {item.status}
                    </p>
                    <p>
                        <b>Gender:</b> {item.gender}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SimpleCard;
