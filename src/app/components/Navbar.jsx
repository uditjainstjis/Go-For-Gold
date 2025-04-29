'use client'
import React from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16 ">
          <div className="flex items-center ">
            <Link href='/'>
              <img src='/logo-real.jpeg' className='h-14 lg:h-16 ml-[-10px] lg:ml-3 mix-blend-multiply'></img>
            </Link>
            
            <h3 className='text-[14px] font-bold lg:ml-3'>X</h3>
            <a href='https://www.newtonschool.co/newton-school-of-technology-nst/home' target='_blank'>
              <img src='/newton4.png' className='h-8 lg:h-10 ml-3 mix-blend-multiply'></img>
            </a>
          </div>
          
          <div className="hidden md:flex items-center text-sm lg:text-base space-x-6 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-yellow-500">Home</Link>
            <Link href="/ioi" className="text-gray-700 hover:text-blue-500">IOI Bootcamp</Link>
            <Link href="/winter-camp" className="block py-2 text-gray-700 hover:text-blue-500">Winter Camp</Link>
            <Link href="/goforgold" className="text-gray-700 hover:text-yellow-500">GFG Camp</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">Home</Link>
            <Link href="/ioi" className="block px-3 py-2 text-gray-700 hover:text-blue-500">IOI Bootcamp</Link>
            <Link href="/winter-camp" className="block px-3 py-2 text-gray-700 hover:text-blue-500">Winter Camp</Link>
            <Link href="/goforgold" className="block px-3 py-2 text-gray-700 hover:text-yellow-500">GFG Camp</Link>
          </div>
        </div>
      )}
    </nav>
  );
}