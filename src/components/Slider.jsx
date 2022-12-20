import React, { useState } from "react";
import Slide from "./Slide";
import { useRef } from "react";

const Slider = ({ dataSlider = [] }) => {
  const [current, setCurrent] = useState(1);
  const sliderRef = useRef();

  const NextSlider = () => {
    sliderRef.current.scrollLeft += 800;
    setCurrent((prev) => {
      if (prev < dataSlider.length) return prev + 1;
      return dataSlider.length;
    });
  };

  const prevSlider = () => {
    sliderRef.current.scrollLeft -= 800;
    setCurrent((prev) => {
      if (prev > 1) return prev - 1;
      return prev;
    });
  };
  return (
    <>
      <div
        ref={sliderRef}
        className=' scrollbar-hide flex overflow-x-scroll w-full mx-auto scroll-smooth snap-mandatory snap-x max-w-[1200px]'
      >
        {dataSlider.map((dataSlide, index) => {
          return <Slide key={index} {...dataSlide} />;
        })}
      </div>
      <div className='flex justify-center py-2 text-2xl text-slate-100 gap-4'>
        <button onClick={prevSlider}> {"<"}</button>
        <p>
          {current} / {dataSlider.length}
        </p>
        <button onClick={NextSlider}> {">"}</button>
      </div>
    </>
  );
};

export default Slider;
