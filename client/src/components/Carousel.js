import { useEffect, useState } from 'react'
import './Carousel.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

export const Carousel = ({data}) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
      };
    
      const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
      };

    return(
        <div className='carousel'>
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left"/>
                {data && Array.isArray(data) && data.map((item, index) => (
                    <div className="carousel-container">
                        <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"} style={{height: '500px', width: '1200px'}}/>
                    </div>
                ))
                }
            <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right"/>
            <span className='indicators'>
            {data.map((_, idx) => {
            return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            ></button>
                 );
            })}
            </span>
        </div>   
    )
}