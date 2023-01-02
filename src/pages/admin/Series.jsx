import React from "react";
import HeroAdmin from "../../components/admin/HeroAdmin";
import SliderMovies from "../../components/admin/SliderMovies";
import { TV_URLS } from "../../data/data";

const Series = () => {
  return (
    <div className='bg-black'>
      <HeroAdmin />
      <SliderMovies url={TV_URLS.populares} width={300} tipo={"tv"} title={"Series populares"} />
      <SliderMovies url={TV_URLS.masvaloradas} width={300} tipo={"tv"} title={"Series populares"} />
      <SliderMovies url={TV_URLS.proximamente} width={300} tipo={"tv"} title={"Series populares"} />
      <SliderMovies
        url={TV_URLS.reproduciendose}
        width={300}
        tipo={"tv"}
        title={"Series populares"}
      />
    </div>
  );
};

export default Series;
