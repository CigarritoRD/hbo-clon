import { useRef } from "react";

import Slider from "./Slider";
import { dataSlider } from "../data/data";

const SliderNuevosFavoritos = () => {
  const sliderRef = useRef();
  console.log(sliderRef);

  return (
    <div className='bg-gradient-to-b from-[#020024]/90 bg-blue-800 border-t-2 flex flex-col items-center border-black pt-14 to via-[#480979] to-black/80 '>
      <h3 className='text-3xl text-slate-100 text-center'>
        Estrenos que se convertirán en nuevos favoritos.
      </h3>
      <Slider dataSlider={dataSlider} />
      <button className='w-auto hover:bg-transparent border-2  hover:bg-gradient-t-br hover:shadow-lg hover:scale-110  duration-200 border-purple-600 hover:border-[#9b34ef] rounded-full uppercase bg-purple-600 text-white py-1 px-6 font-bold my-2'>
        suscribete ahora
      </button>
    </div>
  );
};

export default SliderNuevosFavoritos;
