import { LogosHero } from "./LogosHero";
import Navbar from "./Navbar";
import "./hero.css";

const Hero = () => {
  const urlVideos = ["Bi--TobNCFMK_bs", "339paLFRKlo", "zzBIzYmxatU"];
  const trailerID = Math.floor(Math.random() * urlVideos.length);
  console.log(trailerID);
  return (
    <div className='h-screen'>
      <Navbar />

      <div className='video-background relative overflow-hidden flex flex-col justify-end  w-full h-full z-auto '>
        <div className='absolute h-full w-full bg-gradient-to-t from-black -z-10 via-transparent'></div>
        <div className='absolute h-full w-full bg-gradient-to-t from-purple-900/10 -z-10 via-transparent'></div>

        <iframe
          className='z-[-20]'
          controls={0}
          src={`https://www.youtube.com/embed/${urlVideos[trailerID]}?autoplay=1&mute=1&loop=1&controls=0&playlist=${urlVideos[trailerID]}`}
          title='3d models'
          allow=' autoplay; clipboard-write;  gyroscope; picture-in-picture'
        ></iframe>

        <div className='flex flex-col mx-auto justify-end h-full w-full max-w-[900px] bord '>
          <LogosHero />
        </div>
        {/* textos del hero */}

        <div className='text-white text-center mb-16 px-5'>
          <h4 className='text-2xl mt-2'>COMIENZA A DISFRUTAR LAS MEJORES HISTORIAS</h4>
          <h4 className='text-3xl font-bold '>HECHAS PARA TI</h4>
          <div className='text-center '>
            <img
              className='px-5 inline-block w-full max-w-[480px]'
              src='https://hbomax-images.warnermediacdn.com/2021-09/hero_promo_purpline.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com'
              alt=''
            />
          </div>
          <p className='text-xl my-3'>Los planes empiezan desde</p>
          <p className='text-4xl font-bold my-2'>
            RD$166.58<span className='text-lg font-normal'>/mes*</span>
          </p>
          <button className='cursor-pointer  hover:bg-transparent border-2 duration-200 hover:scale-105 border-purple-600 rounded-full uppercase bg-purple-600 text-white py-1 px-6 font-bold my-2'>
            suscribete ahora
          </button>
          <p className='text-white text-sm'>*aplica al plan prepago anual.</p>
        </div>

        {/* textos del hero */}
      </div>
    </div>
  );
};

export default Hero;
