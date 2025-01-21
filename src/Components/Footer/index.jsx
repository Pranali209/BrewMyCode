import React from 'react';
import Heading from '../Heading';
import Button from '../Button';

import { useTranslation } from 'react-i18next';

export default function Footer({handleBookCall}) {
  const { t } = useTranslation();
  return (
    <footer className="container mx-auto p-8 px-14 py-28 max-md:px-8 bg-black text-white ">
        <Heading  className="text-5xl font-semibold mb-4 text-white" as =" h1" text = {t('footerHeading')} />
  
      <p className="text-lg mb-6 mt-5 text-slate-100">{t('footerpara')}</p>
      <ul className="list-disc list-inside mb-6">
        <li>{t('footersubheading1')}</li>
        <li>{t('footersubheading2')}</li>
      </ul>
      <p className="text-lg font-semibold mb-4">{t('footersubheading3')}</p>
      <div className="flex justify-start">
        <input
          type="email"
            className="text-black max-md:w-[90%] w-[30%] px-2 py-2 mr-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your e-mail..."
        />
      
          <button className=' bg-[#D2F2FF]  text-black px-3 py-1 max-md:px-1  max-md:text-sm  rounded-full'
          onClick={handleBookCall} >{t('footerbtn')}</button>
      </div>
     <div className='h-20'></div>
    </footer>
  );
}
