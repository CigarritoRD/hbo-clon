import React from "react";
import HeroAdmin from "../../components/admin/HeroAdmin";
import SliderMovies from "../../components/admin/SliderMovies";
import { MOVIES_URLS } from "../../data/data";
import { TV_URLS } from "../../data/data";

const Home = () => {
  return (
    <div className=' bg-black'>
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
        tipo={"movie"}
        width={`200px`}
        title={"Proximamente en streaming"}
      />
      <SliderMovies url={TV_URLS.populares} tipo={"tv"} width={300} title={"Series populares"} />
      <SliderMovies
        url={TV_URLS.masvaloradas}
        tipo={"tv"}
        width={200}
        title={"Viendose ahora mismo"}
      />

      <SliderMovies
        url={MOVIES_URLS.reproduciendose}
        tipo={"movie"}
        poster={false}
        width={450}
        height={"280px"}
        title={"peliculas que tienes que ver"}
      />
      <SliderMovies
        url={MOVIES_URLS.populares}
        tipo={"movie"}
        width={200}
        title={"Universo HBO Max"}
      />
    </div>
  );
};

export default Home;
