import React from 'react';
import Slider from 'react-slick';
import './ReactSlickDemo.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlickDemo = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
         slidesToScroll: 1
      };
    //   const imageUrl = [
    //       "http://placekitten.com/g/400/200",
    //       "http://placekitten.com/g/400/200",
    //       "http://placekitten.com/g/400/200"
    //   ]
    return (
        <div className="container">
        <Slider {...settings}>
                <div>
                    <img src="http://placekitten.com/g/400/200" alt="img" />
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200" alt="img" />
                </div>
        </Slider>
        </div>
    )
}

export default ReactSlickDemo;
