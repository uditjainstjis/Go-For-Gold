'use client'
import React from 'react';
export default function Partners(){


    return(
        <div className='h-[55vh] bg-gray-50 z-[-3] mb-4'>
            <div className='h-[40px] bg-gray-50 mt-[-40px]'></div>
        <h2 className="text-4xl font-bold text-center ">Our Partners</h2>
        <div className='h-64 w-full flex flex-col sm:flex-row justify-evenly mt-6 sm:mt-14'>

            <div className='flex flex-col items-center '>
                <h2 className='font-semibold text-xl md:text-2xl text-gray-700 mb-4'>Program Partner</h2>
                <img src='/rubrik.png' className='w-52 sm:w-64 border border-black/4 p-[-30px]' alt='Rubrik'/>
            </div>
            <div className='flex flex-col items-center mt-0 lg-mt[-20px]'>
                <h2 className='font-semibold text-xl md:text-2xl text-gray-700 mb-4'>Institute Partner</h2>
                <img src='/rishihood.png' className='w-64 sm:w-80 border border-black/4' alt="Rishihood"/>
            </div>
        </div>
        </div>
    )
}