const ButtonMorado = ({ children }) => {
  return (
    <button className='hover:bg-transparent text-md  border-2 duration-200 hover:scale-105 my-4 border-purple-600 w-full md:w-fit rounded-full uppercase bg-purple-600 text-white py-3 px-18 md:px-14 md:py-2 font-bold '>
      {children}
    </button>
  );
};

export default ButtonMorado;
