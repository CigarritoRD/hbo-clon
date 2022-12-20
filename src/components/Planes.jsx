import React, { useState } from "react";
import ButtonMorado from "./ButtonMorado";
import SelectorPLanForm from "./SelectorPLanForm";

const Planes = () => {
  const [planElegido, setPlanElegido] = useState({ plan: "un-mes", selected: "translate-x-[0%]" });

  const handleChangePlan = (e) => {
    const selected = {
      "un-mes": "translate-x-[0%]",
      "tres-meses": "translate-x-[100%]",
      "doce-meses": "translate-x-[200%]",
    };

    setPlanElegido((prevPlan) => {
      return { ...prevPlan, plan: e.target.id, selected: selected[e.target.id] };
    });
    console.log(planElegido);
  };

  return (
    <div
      className={`flex flex-col gap-6 items-center bg-blue-900 bg-cover bg-right bg-[url('https://hbomax-images.warnermediacdn.com/2022-06/plans_background.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com')]`}
    >
      <h2 className={"text-center text-slate-100 text-3xl pt-20 font-medium max-w-[640px]"}>
        Conoce nuestros planes y ahorra cuando eliges
      </h2>
      <h3 className='text-center text-slate-100 text-3xl  max-w-[600px]'>
        el de 3 o 12 meses con pago anticipado
      </h3>
      {/* SELECTOR DE PLAN FORMULARIO */}
      <div className='max-w-[600px] w-full px-10'>
        <SelectorPLanForm handleChangePlan={handleChangePlan} planElegido={planElegido} />
      </div>
      {/* SELECTOR DE PLAN FORMULARIO */}
      <div className='plan-contenedor flex lg:flex-row max-w-[1100px] flex-col gap-10 justify-center w-full items-center  px-8'>
        {/* PLAN CARD */}

        <div className='flex-1 border-2 border-pink-500  flex flex-col w-full justify-between items-center py-8  text-center rounded-xl bg-gradient-to-b from-purple-400/20 via-purple-400/20 p-4 h-[350px]'>
          <h4 className='text-4xl py-4 text-white font-bold'>12 meses</h4>
          <p className='text-3xl py-4 text-white font-bold'>RD$2,899.00</p>
          <p className='text-slate-50 py-4 text-dm'>igual a RD241.58 al mes*</p>
          <ButtonMorado>Elige este Plan</ButtonMorado>
        </div>
        {/* PLAN CARD */}
        {/* PLAN CARD */}

        <div className='flex-1  flex flex-col w-full justify-between items-center py-8  text-center rounded-xl bg-gradient-to-b from-purple-400/20 via-purple-400/20 p-4 h-[350px]'>
          <h4 className='text-3xl py-4 text-white font-bold'>12 meses</h4>
          <p className='text-3xl py-4 text-white font-bold'>RD$2,899.00</p>
          <p className='text-slate-50 py-4 text-dm'>igual a RD241.58 al mes*</p>
          <ButtonMorado>Elige este Plan</ButtonMorado>
        </div>
        {/* PLAN CARD */}
        {/* PLAN CARD */}

        <div className='flex-1  flex flex-col w-full justify-between items-center py-8  text-center rounded-xl bg-gradient-to-b from-purple-400/20 via-purple-400/20 p-4 h-[350px]'>
          <h4 className='text-3xl py-4 text-white font-bold'>12 meses</h4>
          <p className='text-3xl py-4 text-white font-bold'>RD$2,899.00</p>
          <p className='text-slate-50 py-4 text-dm'>igual a RD241.58 al mes*</p>
          <ButtonMorado>Elige este Plan</ButtonMorado>
        </div>
        {/* PLAN CARD */}
      </div>

      <p className='py-5 text-center text-slate-50 max-w-[400px]'>
        *Requiere pago anticipado. Ahorro basado en el precio del plan estándar anual comparado con
        el precio del plan estándar mensual por 12 meses, excluyendo impuestos. Aplican términos.
      </p>
    </div>
  );
};

export default Planes;
