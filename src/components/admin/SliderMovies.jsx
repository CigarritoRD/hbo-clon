import PeliculasSlider from "../PeliculasGratisSlider";

const SliderMovies = ({ poster, url, title, width, height = "auto" }) => {
  console.log({ poster });
  return (
    <div className='py-8 md:px-4 px-2  bg-gradient-to-b from-purple-900/5 via-purple-800/40 purple-900/5'>
      <h5 className='text-white text-xl'>{title}</h5>
      <PeliculasSlider poster={poster} url={url} width={width} height={height} />
    </div>
  );
};

export default SliderMovies;
