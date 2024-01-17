import React from "react";
import { ICharacter } from "@/interfaces/characters";
import './SimpleCard.scss';

interface ISimpleCardProps {
    item: ICharacter;
}

const SimpleCard: React.FC<ISimpleCardProps> = ({ item }) => {
    return (
        <div className="SimpleCard" key={`SimpleCard_${item.id}`}>
            <div className="SimpleCard__wrapper">
                <div className="SimpleCard__cover">
                    <div className="ribbon">
                        <span>
                            {item.species === "Human"
                                ? "🤩 Recommended"
                                : "😵‍💫 Not recommended"}
                        </span>
                    </div>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="SimpleCard__info">
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