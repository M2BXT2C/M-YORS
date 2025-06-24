import React from 'react';
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
      <MdCancel className='text-red-600 text-[150px]' />
      <p className='text-red-600 font-bold text-xl'>Payment Cancelled</p>
      <Link to={"/cart"} className='p-2 px-3 mt-5 border-2 border-red-600 rounded font-semibold text-red-600 hover:bg-red-600 hover:text-white'>
        Go To Cart
      </Link>
    </div>
  );
};

export default Cancel;
