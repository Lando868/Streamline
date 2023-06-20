import Slider from 'react-slick';
import Image from 'next/image';
import { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
        }

        return (
            <>
                <p
                    className="carousel-title">
                    {props.type}
                    <span className='carousel-count'>{props.count ? `(${props.count})` : (`(0)`)}</span>
                </p>
                <Slider {...settings}>
                    {props.images?.map((src, index) => (
                        <div>
                            <Image
                                key={index}
                                // src={"/" + src}
                                src="/assets/images/drawing_1.jpg"
                                width={350}
                                height={150}
                                alt="asset-drawing"
                            />
                        </div>
                    ))}
                </Slider>
            </>
        )
    }
}

// export default Carousel;


// <Slider {...settings}>
// {props.images?.map((src, index) => (
//     <div>
//         <Image
//             key={index}
//             // src={"/" + src}
//             src="/assets/images/drawing_1.jpg"
//             width={350}
//             height={150}
//             alt="asset-drawing"
//         />
//     </div>
// ))}
// </Slider>