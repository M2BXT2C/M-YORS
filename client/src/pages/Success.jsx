import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
      <AiFillCheckCircle className='text-green-600 text-[150px]' />
      <p className='text-green-600 font-bold text-xl'>Payment Successful</p>
      <Link to={"/order"} className='p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>
        See Order
      </Link>
    </div>
  );
};

export default Success;
