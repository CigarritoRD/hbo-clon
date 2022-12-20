import React from "react";

const SelectorPLanForm = ({ planElegido, handleChangePlan }) => {
  return (
    <form
      className='flex justify-between my-10 bg-purple-800/20 rounded-full relative z-20'
      action=''
    >
      <div
        className={`border rounded-full bg-slate-100 absolute -z-10  h-full top-0 w-[33.33%] left-0 ${planElegido.selected} duration-300 `}
      ></div>
      <div className='flex-1 flex items-center justify-center py-2 '>
        <label
          className={`${
            planElegido.plan === "un-mes" ? "text-slate-800" : "text-slate-100"
          }   text-md md:text-lg font-medium cursor-pointer`}
          htmlFor='un-mes'
        >
          1 MES
        </label>
        <input
          defaultChecked
          className='hidden'
          onClick={handleChangePlan}
          type='radio'
          name='plan'
          id='un-mes'
        />
      </div>
      <div className=' flex items-center justify-center py-2 flex-1'>
        <label
          className={`${
            planElegido.plan === "tres-meses" ? "text-slate-800" : "text-slate-100"
          }   text-md md:text-lg font-medium cursor-pointer`}
          htmlFor='tres-meses'
        >
          3 MESES
        </label>
        <input
          className='hidden'
          onClick={handleChangePlan}
          type='radio'
          name='plan'
          id='tres-meses'
        />
      </div>
      <div className=' flex-1 flex items-center justify-center py-2 '>
        <label
          className={`${
            planElegido.plan === "doce-meses" ? "text-slate-800" : "text-slate-100"
          }   text-md md:text-lg font-medium cursor-pointer`}
          htmlFor='doce-meses'
        >
          12 MESES
        </label>
        <input
          className='hidden'
          onClick={handleChangePlan}
          type='radio'
          name='plan'
          id='doce-meses'
        />
      </div>
    </form>
  );
};

export default SelectorPLanForm;
