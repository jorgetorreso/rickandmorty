import Slider from "react-slick";
import { ICharacter } from "@/interfaces/characters";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomSlider.scss';
import SliderCard from "../SliderCard";

const CustomSlider = ({ items }: { items: ICharacter[] }) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="CustomSlider">
            <Slider {...settings}>
                {items.length > 0 && items.map((item, index) => {
                    return (<SliderCard item={item}  key={item.id} index={index} />)
                }) }
            </Slider>
        </div>
    );
};

export default CustomSlider;
