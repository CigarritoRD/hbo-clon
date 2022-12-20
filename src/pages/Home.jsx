import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PeliculasGratisSlider from "../components/PeliculasGratisSlider";
import Planes from "../components/Planes";
import PostPlanSeccion from "../components/PostPlanSeccion";
import SliderNuevosFavoritos from "../components/SliderNuevosFavoritos";

const Home = () => {
  return (
    <>
      <Hero />
      <Planes />
      <SliderNuevosFavoritos />
      <PostPlanSeccion />
      <div className='bg-slate-900 px-[100px]'>
        <PeliculasGratisSlider
          url={`https://api.themoviedb.org/3/movie/now_playing?api_key=f71b456052aff7baa010ea9469450e7b&page=1`}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
