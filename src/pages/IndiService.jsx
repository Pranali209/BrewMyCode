import React, { useState } from 'react'

import BgWeb from '../assets/Webdevbg.svg'
import BgGame from '../assets/gamebg.svg'
import BgChain from '../assets/blockChainbg.svg'
import Bgecommerce from '../assets/ecommercebg.svg'
import Heading from '../Components/Heading'
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next'


function IndiService() {
    const { t } = useTranslation();
    const servicesData = [
        {
            id: 0,
            mainHeading: t('servicesData.WebDevelopment.mainHeading'),
            mainpara: t('servicesData.WebDevelopment.mainpara'),
            subHeading: t('servicesData.WebDevelopment.subHeading'),
            subpara: t('servicesData.WebDevelopment.subpara'),
            bgImage: BgWeb,
            subhead1: t('servicesData.WebDevelopment.subhead1'),
            subpara1: t('servicesData.WebDevelopment.subpara1'),
            subhead2: t('servicesData.WebDevelopment.subhead2'),
            subpara2: t('servicesData.WebDevelopment.subpara2'),
            subhead3: t('servicesData.WebDevelopment.subhead3'),
            subpara3: t('servicesData.WebDevelopment.subpara3'),
            subhead4: t('servicesData.WebDevelopment.subhead4'),
            subpara4: t('servicesData.WebDevelopment.subpara4')
        },
        {
            id: 1,
            mainHeading: t('servicesData.GameDevelopment.mainHeading'),
            mainpara: t('servicesData.GameDevelopment.mainpara'),
            subHeading: t('servicesData.GameDevelopment.subHeading'),
            subpara: t('servicesData.GameDevelopment.subpara'),
            bgImage: BgGame,
            subhead1: t('servicesData.GameDevelopment.subhead1'),
            subpara1: t('servicesData.GameDevelopment.subpara1'),
            subhead2: t('servicesData.GameDevelopment.subhead2'),
            subpara2: t('servicesData.GameDevelopment.subpara2'),
            subhead3: t('servicesData.GameDevelopment.subhead3'),
            subpara3: t('servicesData.GameDevelopment.subpara3'),
            subhead4: t('servicesData.GameDevelopment.subhead4'),
            subpara4: t('servicesData.GameDevelopment.subpara4')
        },
        {
            id: 2,
            mainHeading: t('servicesData.ECommerceDevelopment.mainHeading'),
            mainpara: t('servicesData.ECommerceDevelopment.mainpara'),
            subHeading: t('servicesData.ECommerceDevelopment.subHeading'),
            subpara: t('servicesData.ECommerceDevelopment.subpara'),
            bgImage: Bgecommerce,
            subhead1: t('servicesData.ECommerceDevelopment.subhead1'),
            subpara1: t('servicesData.ECommerceDevelopment.subpara1'),
            subhead2: t('servicesData.ECommerceDevelopment.subhead2'),
            subpara2: t('servicesData.ECommerceDevelopment.subpara2'),
            subhead3: t('servicesData.ECommerceDevelopment.subhead3'),
            subpara3: t('servicesData.ECommerceDevelopment.subpara3'),
            subhead4: t('servicesData.ECommerceDevelopment.subhead4'),
            subpara4: t('servicesData.ECommerceDevelopment.subpara4')
        },
        {
            id: 3,
            mainHeading: t('servicesData.BlockchainDevelopment.mainHeading'),
            mainpara: t('servicesData.BlockchainDevelopment.mainpara'),
            subHeading: t('servicesData.BlockchainDevelopment.subHeading'),
            subpara: t('servicesData.BlockchainDevelopment.subpara'),
            bgImage: BgChain,
            subhead1: t('servicesData.BlockchainDevelopment.subhead1'),
            subpara1: t('servicesData.BlockchainDevelopment.subpara1'),
            subhead2: t('servicesData.BlockchainDevelopment.subhead2'),
            subpara2: t('servicesData.BlockchainDevelopment.subpara2'),
            subhead3: t('servicesData.BlockchainDevelopment.subhead3'),
            subpara3: t('servicesData.BlockchainDevelopment.subpara3'),
            subhead4: t('servicesData.BlockchainDevelopment.subhead4'),
            subpara4: t('servicesData.BlockchainDevelopment.subpara4')
        }
    ];
     const {serviceId }= useParams()
     const [serviceData , setServiceData] = useState( servicesData[serviceId])

     console.log(serviceData);
     
    return (
        <div className='flex justify-center items-center relative '>
            <div className='-z-50 movingAnimation  absolute flex flex-col items-center max-md:justify-center bgService  '>
                <img src={serviceData.bgImage} alt="" className=' object-cover max-md:w-full max-md:h-full max-md:animate-mobileCirclur' />
                </div>
            <div className=' border-2 border-black    max-md:px-5  px-10 py-2 my-10  
             w-[75%] max-md:w-[90%] top-[8vh] left-[12.5vw] 
              bg-white z-30  opacity-[0.9]  shadow-md Elemt  ' >


                <Heading className="text-center font-semibold text-[2rem] text-black " as="h1"
                    text="Service " />
                   
                <div className='flex max-md:flex-col justify-between'>
                    <div className=' w-[50%] max-md:w-full flex flex-col items-start my-5 '>
                        <Heading className="text-center font-semibold text-[2rem] max-md:text-[1.5rem] max-md:mx-auto text-black " as="h1"
                            text={serviceData.mainHeading}/>
                        <p className='text-[0.9rem] mt-2 max-md:text-center max-md:text-sm'>{serviceData.mainpara}</p>
                    </div>
                    <div className='w-[30%] max-md:w-full flex justify-around max-md:justify-between items-center'>
                        <div className='flex flex-col items-start max-md:mr-7'>
                            <Heading className="text-center font-semibold text-[1.5rem] text-black max-md:text-[1rem]" as="h1"
                                text="45%" />
                            <p className='w-[4.5rem] max-md:text-sm'>{t('servicedataBoost')}</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <Heading className="text-center font-semibold text-[1.5rem] text-black max-md:text-[1rem] " as="h1"
                                text="10,000+" />
                            <p className='w-32 max-md:text-sm'>{t('servicedataBoost1')}</p>
                        </div>
                    </div>

                </div>
                <div className='w-[70%] max-md:w-[100%] max-md:mt-5'>
                    <Heading className="text-left font-semibold text-[1.2rem] max-md:text-[1rem] text-black " as="h1"
                        text={serviceData.subHeading} />
                    <p className='text-[0.9rem] mt-2 text-left max-md:text-sm'>{serviceData.subpara} </p>
                </div>
                <div className=' flex max-md:flex-col justify-between mt-10  max-md:mt-5'>
                    <div className='w-[40%] max-md:w-full flex flex-col items-start '>
                        <Heading className="text-center font-semibold text-[1.2rem] text-black max-md:text-[1rem]" as="h1"
                            text={serviceData.subhead1} />
                        <p className='text-[0.9rem] max-md:text-sm'>{serviceData.subpara1}</p>
                    </div>
                    <div className='flex flex-col items-start w-[40%]  max-md:w-full  max-md:mt-5'>
                        <Heading className="text-center font-semibold text-[1.2rem] text-black max-md:text-[1rem]" as="h1"
                            text={serviceData.subhead2} />
                        <p className='text-[0.9rem] max-md:text-sm'>{serviceData.subpara2}</p>
                    </div>
                </div>
                <div className=' flex max-md:flex-col justify-between  mt-14 max-md:mt-5'>
                    <div className='w-[40%] max-md:w-full  flex flex-col items-start '>
                        <Heading className="text-center font-semibold text-[1.2rem] text-black max-md:text-[1rem]" as="h1"
                            text={serviceData.subhead3} />
                        <p className='text-[0.9rem] max-md:text-sm'>{serviceData.subpara3}</p>
                    </div>
                    <div className='flex flex-col items-start w-[40%] max-md:w-full  max-md:mt-5  mb-5'>
                        <Heading className="text-center font-semibold text-[1.2rem] text-black max-md:text-[1rem]" as="h1"
                            text={serviceData.subhead4} />
                        <p className='text-[0.9rem] max-md:text-sm'>{serviceData.subpara4}</p>
                    </div>
                </div>
            </div>
          
        </div>

      
    
           
       
 

            
          
        
        
        



    )
}

export default IndiService