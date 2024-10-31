"use client"

import React from 'react';
import Image from 'next/image';
import slideImg from '../Images/slideImg.jpeg';
import 'keen-slider/keen-slider.min.css'; // Import keen-slider CSS
import { useKeenSlider } from 'keen-slider/react'; // Import the useKeenSlider hook

const Slider = () => {
  const [ref] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <div className="keen-slider " ref={ref}>
      <div className="keen-slider__slide gap-3">
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden border-2 border-orange-400">
          <Image src={slideImg} alt="Slot Machine" width={500} height={300} objectFit="cover" />
        </div>
      </div>
     
    </div>
  );
};

export default Slider;
