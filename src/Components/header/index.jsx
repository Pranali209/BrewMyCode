import React, { useState } from 'react';
import Button from '../Button';
import { useTranslation } from 'react-i18next'
import LanguagePicker from '../language';
import LangDetector from '../LangaugeDetector';


function Header() {
  const { t } = useTranslation();
  
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
          <a href="#" className="text-gray-700 hover:text-black "  >{t('menuOptions.Home')}</a>
          <a href="#clients" className="text-gray-700 hover:text-black ">{t('menuOptions.About')}</a>
          <a href="#Services" className="text-gray-700 hover:text-black ">{t('menuOptions.Service')}</a>
          <a href="#NeedHelp" className="text-gray-700 hover:text-black ">{t('menuOptions.Contact')}</a>
        </nav>
        <div className="flex items-center space-x-4">
        <a href="#" className="text-black hover:text-gray-700 font-semibold relative max-md:text-sm max-md:font-medium "
        onClick={HandleLanguagePicker}>{t('menuOptions.Language')}</a>
        {
          showlangPicker && (  <LangDetector showlangPicker = {showlangPicker}  setLangPicker = {HandleLanguagePicker}/>)
        }
      
      </div>
      </div>
      
    </header>
  );
}



export default Header;



