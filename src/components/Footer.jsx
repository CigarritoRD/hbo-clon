import React from "react";

const Footer = () => {
  return (
    <div className=' flex-wrap font-medium gap-2 text-[#9e86ff] flex flex-col justify-center items-center bg-gradient-to-b from-black/80 via-black/60 to-black/80 bg-blue-800 py-8'>
      <div className='flex justify-center gap-4 flex-wrap'>
        <p>PROXIMAMENTE</p>
        <p>PELICULAS DESTACADAS</p>
        <p>SERIES</p>
        <p>AYUDA</p>
      </div>
      <div className='flex justify-center gap-4 flex-wrap'>
        <p>privacidad</p>
        <p>terminos de uso</p>
        <p>anuncios de prensa</p>
        <p>contactos de prensa</p>
        <p>gestionar preferencias</p>
      </div>
      <div className='text-sm'>
        © 2022 WarnerMedia Direct Latin America, LLC. Todos los derechos reservados. HBO Max se usa
        bajo licencia.
      </div>
      <div className='text-lg py-8'>facebook instagram twitter youtube</div>
    </div>
  );
};

export default Footer;
