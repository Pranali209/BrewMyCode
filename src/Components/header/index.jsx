import React, { useState } from 'react';
import Button from '../Button';
import { useTranslation } from 'react-i18next'
import LanguagePicker from '../language';
import LangDetector from '../LangaugeDetector';


function Header() {
  
const [ showlangPicker , setLangPicker] = useState(false)
 
function HandleLanguagePicker(params) 
{

  
  setLangPicker(!showlangPicker)
  console.log(showlangPicker);
}
  return (
    <header className="flex justify-between items-center p-3 px-8 py-6 max-md:px-4 ">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold text-black mr-4 max-md:text-3xl">Brewmycode</h1>
        <nav className="space-x-4 max-md:hidden lg:block">
          <a href="#" className="text-gray-700 hover:text-black " >Home</a>
          <a href="#" className="text-gray-700 hover:text-black ">About</a>
          <a href="#" className="text-gray-700 hover:text-black ">Services</a>
          <a href="#" className="text-gray-700 hover:text-black ">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
        <a href="#" className="text-black hover:text-gray-700 font-semibold relative max-md:text-sm max-md:font-medium "
        onClick={HandleLanguagePicker}>Language</a>
        {
          showlangPicker && (  <LangDetector showlangPicker = {showlangPicker}  setLangPicker = {HandleLanguagePicker}/>)
        }
      
      </div>
      </div>
      
    </header>
  );
}



export default Header;



