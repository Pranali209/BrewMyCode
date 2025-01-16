import React, { useState } from 'react';
import Button from '../Button';

function Header() {
  

 

  return (
    <header className="flex justify-between items-center p-3 px-8 py-6 ">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold text-black mr-4">Brewmycode</h1>
        <nav className="space-x-4 max-md:hidden lg:block">
          <a href="#" className="text-gray-700 hover:text-black " >Home</a>
          <a href="#" className="text-gray-700 hover:text-black ">About</a>
          <a href="#" className="text-gray-700 hover:text-black ">Services</a>
          <a href="#" className="text-gray-700 hover:text-black ">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
        <a href="#" className="text-black hover:text-gray-700 font-semibold ">Language</a>
        
      </div>
      </div>
      
    </header>
  );
}



export default Header;



