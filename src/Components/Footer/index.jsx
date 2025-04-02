import React from 'react';
import Heading from '../Heading';
import Button from '../Button';

import { useTranslation } from 'react-i18next';

export default function Footer({handleBookCall}) {
  const { t } = useTranslation();
  return (
    <footer className="container p-8 mx-auto text-white bg-black px-14 py-28 max-md:px-8 ">
        <Heading  className="mb-4 text-5xl font-semibold text-white" as =" h1" text = {t('footerHeading')} />
  
      
      <ul className="mb-6 list-disc lg:list-inside w-[70%] max-md:w-full ">
        <li>{t('footersubheading1')}</li>
        <p className='ml-5 max-md:ml-0 '> {t('footerpara')}</p>
        <li>{t('footersubheading2')}</li>
      </ul>
      <p className="mb-4 text-lg font-semibold">{t('footersubheading3')}</p>
      <div className="flex justify-start">
        <input
          type="email"
            className="text-black max-md:w-[90%] w-[30%] px-2 py-2 mr-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your e-mail..."
        />
      
          <button className=' bg-[#D2F2FF]  text-black px-3 py-1 max-md:px-1  max-md:text-sm  rounded-full'
         >{t('footerbtn')}</button>
      </div>
     <div className='h-20'></div>
    </footer>
  );
}
