import React from 'react';
import rct1 from '../../assets/rct1.svg'
import rct2 from '../../assets/rct2.svg'
import rct3 from '../../assets/rct3.svg'
import rct4 from '../../assets/rct4.svg'
import { useTranslation } from 'react-i18next';

const WorkBox = () => {
  const { t } = useTranslation()
  const cards = [
    {
      title: t('workcards.WebDevelopment.title'),
      image: rct1,
      description: t('workcards.WebDevelopment.description'),


    },
    {
      title: t('workcards.GameDevelopment.title'),
      image: rct2,
      description: t('workcards.GameDevelopment.description'),

    },
    {
      title: t('workcards.Blockchain.title'),
      image: rct3,
      description: t('workcards.Blockchain.description'),

    }

  ];

  return (
    <div className="container px-40 mx-auto max-md:px-10 ">

      {cards.map((card, index) => (
        <div key={index} className="flex flex-col py-6 ">
          {
            index === 1 ? <div className='mt-10'>
              <img src={card.image} alt={card.title} className={`ml-60 max-md:ml-1 mb-2 w-[80%]  max-md:w-full shadow-2xl ${card.count} `} />
              <div className="flex justify-between my-10 ml-60 max-md:ml-1 max-md:mx-3 w-[55%]  max-md:w-full max-md:flex-col">

                <h2 className="text-lg font-semibold ">{card.title}</h2>
                <p className="ml-2 text-lg text-left text-gray-600 max-md:ml-0 max-md:text-base ">{card.description}</p>


              </div>
            </div> :
              <div className='mt-10'>
                <img src={card.image} alt={card.title} className={` mb-2 w-[80%] max-md:w-full shadow-2xl ${card.count} `} />
                <div className="flex justify-between my-10 max-md:mx-3 w-[50%] max-md:w-full max-md:flex-col">

                  <p className="text-lg font-semibold ">{card.title}</p>
                  <p className="ml-2 text-lg text-gray-600 max-md:ml-0 max-md:text-base ">{card.description}</p>


                </div>
              </div>
          }





        </div>
      ))}

    </div>
  );
};

export default WorkBox;
