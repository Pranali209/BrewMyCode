import React from 'react';
import rct1 from '../../assets/rct1.svg'
import rct2 from '../../assets/rct2.svg'
import rct3 from '../../assets/rct3.svg'
import rct4 from '../../assets/rct4.svg'
const cards = [
  {
    title: 'Web Development',
    image: rct1,
    description: 'Blockchain And Crypto Made Simple.',
    count: 'w-[450px] h-[470px] max-md:h-[246px] max-md:w-[237px] max-md:w-[237px]',
    blackdiv: 'w-[450px] h-[460px] max-md:h-[243px] max-md:w-[240px]  mt-5 ml-5 ',
  },
  {
    title: 'Game Development',
    image: rct2,
    description: 'Blockchain And Crypto Made Simple.',
    count: 'w-[290px] h-[290px] max-md:h-[236px] max-md:w-[237px]',
    blackdiv: 'w-[290px] h-[278px] max-md:h-[232px]  max-md:w-[245px] mt-5 ml-5',
  },
  {
    title: 'Blockchain',
    image: rct3,
    description: 'Blockchain And Crypto Made Simple.',
    count: 'w-[290px] h-[290px] max-md:h-[236px] max-md:w-[237px]',
    blackdiv: 'w-[290px] h-[278px] max-md:h-[232px]  max-md:w-[245px] mt-5 ml-5'
  },
  {
    title: 'Ecommerce Solution',
    image: rct4,
    description: 'Blockchain And Crypto Made Simple.',
     count: 'w-[450px] h-[470px] max-md:h-[246px] max-md:w-[237px] max-md:w-[237px]',
     blackdiv: 'w-[450px] h-[460px] max-md:h-[243px] max-md:w-[240px]  mt-5 ml-5',
  }
];

const WorkBox = () => {
  return (
    <div className="container mx-auto px-40 max-md:px-10  ">
      <div className="grid grid-cols-1 max-md:grid-cols-1 lg:grid-cols-2">
        {cards.map((card, index) => (
          <div key={index} className=" flex items-center flex-col py-6">
          <div id="shadowdiv" className={`bg-black  absolute z-[-1] ${card.blackdiv}`}></div>
            <img src={card.image} alt={card.title} className={` mb-2 shadow-2xl ${card.count} `} />
           
            
            <div className="flex justify-between  items-center my-10 max-md:mx-3  ">
              <div>
                <h2 className="text-xl font-bold text-left">{card.title}</h2>
                <p className="text-gray-600 text-sm text-left max-md:text-base">{card.description}</p>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkBox;
