import React from "react";
import HeroAdmin from "../../components/admin/HeroAdmin";
import SliderMovies from "../../components/admin/SliderMovies";
import { MOVIES_URLS } from "../../data/data";

const Peliculas = () => {
  return (
    <div className='bg-black'>
      <HeroAdmin />
      <SliderMovies
        url={MOVIES_URLS.masvaloradas}
        tipo={"movie"}
        width={300}
        title={"Universo HBO Max"}
      />
      <SliderMovies
        url={MOVIES_URLS.populares}
        tipo={"movie"}
        width={200}
        title={"Peliculas Populares"}
      />
      <SliderMovies
        url={MOVIES_URLS.proximamente}
        width={`200px`}
        tipo={"movie"}
        title={"Proximamente en streaming"}
      />
    </div>
  );
};

export default Peliculas;
