import React from "react";
import { getColorByIndex } from "@/utils/helper";
import { ICharacter } from "@/interfaces/characters";
import './SliderCard.scss';

interface ISliderCardProps {
  item: ICharacter;
  index: number;
}

const SliderCard: React.FC<ISliderCardProps> = ({ item, index }) => {
  return (
    <div className="SliderCard" key={`SliderCard_${item.id}`}>
      <div
        className="SliderCard__wrapper"
        style={{ background: getColorByIndex(index) }}
      >
        <div className="SliderCard__cover">
          <div className="ribbon">
            <span>
              {item.species === "Human"
                ? "🤩 Recommended"
                : "😵‍💫 Not recommended"}
            </span>
          </div>
          <img src={item.image} alt={item.name} />
        </div>
        <div className="SliderCard__info">
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
          {item.type && <p>{item.type}</p>}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
