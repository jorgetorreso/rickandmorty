import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomSlider.scss';
import { ICharacter } from "@/store/characters/characterSlice";
import { COLOR_PALETTE } from "@/constants/color";

const CustomSlider = ({ items }: { items: ICharacter[] }) => {
    const settings = {
        dots: true,
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
                    slidesToShow: 2,
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
                    return (
                        <div className='CustomSlider__item' key={index}>
                            <div className='CustomSlider__item__wrapper' style={{ background: COLOR_PALETTE[index % COLOR_PALETTE.length] }}>
                                <div className='CustomSlider__item__cover'>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className='CustomSlider__item__info'>
                                    <h2>{item.name}</h2>
                                    <p><b>Species:</b> {item.species}</p>
                                    <p><b>status:</b> {item.status}</p>

                                    <p><b>gender:</b> {item.gender}</p>
                                    <p>{item.type}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </Slider>
        </div>
    );
};

export default CustomSlider;
