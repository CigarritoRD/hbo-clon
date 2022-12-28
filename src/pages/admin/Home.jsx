import React from "react";
import HeroAdmin from "../../components/admin/HeroAdmin";
import SliderMovies from "../../components/admin/SliderMovies";
import { MOVIES_URLS } from "../../data/data";
import { TV_URLS } from "../../data/data";

const Home = () => {
  return (
    <div className='min-h-screen bg-black'>
      <HeroAdmin />

      <SliderMovies url={MOVIES_URLS.masvaloradas} width={300} title={"Universo HBO Max"} />
      <SliderMovies url={MOVIES_URLS.populares} width={200} title={"Peliculas Populares"} />
      <SliderMovies
        url={MOVIES_URLS.proximamente}
        width={`200px`}
        title={"Proximamente en streaming"}
      />
      <SliderMovies url={TV_URLS.populares} width={300} title={"Series populares"} />
      <SliderMovies url={MOVIES_URLS.populares} width={200} title={"Viendose ahora mismo"} />
      <SliderMovies
        url={MOVIES_URLS.populares}
        poster={false}
        width={450}
        height={"280px"}
        title={"peliculas que tienes que ver"}
      />
      <SliderMovies url={MOVIES_URLS.populares} width={200} title={"Universo HBO Max"} />
    </div>
  );
};

export default Home;
