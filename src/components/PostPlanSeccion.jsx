import React from "react";

const PostPlanSeccion = () => {
  return (
    <div className='bg-gradient-to-b from-black/80 via-black/70 to-black/80 bg-blue-800 p-2 md:p-10 '>
      <div className='text-center p-4'>
        <h3 className='text-3xl text-white'>Una experiencia sencilla y completa</h3>
        <p className='text-md text-white py-4'>Disponibilidad varia de acuerdo al plan</p>
      </div>
      <div className='w-full mx-auto max-w-[1110px]'>
        <img
          className='w-full'
          src='https://hbomax-images.warnermediacdn.com/2021-07/device_car_eng.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=2009'
          alt=''
        />
      </div>
    </div>
  );
};

export default PostPlanSeccion;
