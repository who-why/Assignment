"use client"

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import swiperImg1 from '../Images/swiperImg1.png';
import swiperImg2 from '../Images/swiperImg2.png';
import swiperImg3 from '../Images/swiperImg3.png';
import Image from 'next/image';

const ImageSwiper = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1 },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-[300px] h-[600px]">
      <div className="keen-slider__slide">
        <Image src={swiperImg1} width={300} height={600} alt="swiper-img1" className="bg-cover bg-center" />
      </div>
      <div className="keen-slider__slide">
        <Image src={swiperImg2} width={300} height={600} alt="swiper-img2" className="bg-cover bg-center" />
      </div>
      <div className="keen-slider__slide">
        <Image src={swiperImg3} width={300} height={600} alt="swiper-img3" className="bg-cover bg-center" />
      </div>
    </div>
  );
};

export default ImageSwiper;
