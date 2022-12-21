import React from "react";

const Slide = (props = {}) => {
  console.log(props);
  const { title, description, imagen, actor } = props;
  return (
    <div className='flex flex-col md:flex-row-reverse gap-12 mt-14 justify-center flex-[0_0_100%] snap-start p-4'>
      <div className=' bg-black border-2 flex-1 min-h-[200px]'></div>

      <div className='flex flex-col gap-4 flex-1'>
        <div>
          <h4 className='font-bold text-2xl text-slate-100'>{title}</h4>
          <p className='text-slate-300 text-xl'>{description}</p>
        </div>
        <div className='flex gap-2'>
          <div className='flex flex-col justify-center items-center'>
            <div className='max-w-[100px]'>
              <img className='w-full' src={imagen} alt={imagen} />
            </div>
            <p className='text-lg text-slate-300 text-center'>{actor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
