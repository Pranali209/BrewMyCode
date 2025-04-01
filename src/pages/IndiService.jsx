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
            mainparaSubHead: t('servicesData.WebDevelopment.mainparaSubHead'),
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
            mainparaSubHead: t('servicesData.GameDevelopment.mainparaSubHead'),
            subHeading: t('servicesData.GameDevelopment.subHeading'),
            subpara: t('servicesData.GameDevelopment.subpara'),
            bgImage: BgGame,
            subhead1: t('servicesData.GameDevelopment.subhead1'),
            subpara1: t('servicesData.GameDevelopment.subpara1'),
            subhead2: t('servicesData.GameDevelopment.subhead2'),
            subpara2: t('servicesData.GameDevelopment.subpara2'),
            subheadExtra: t('servicesData.GameDevelopment.subheadExtra'),
            subhead3: t('servicesData.GameDevelopment.subhead3'),
            subpara3: t('servicesData.GameDevelopment.subpara3'),
            subhead4: t('servicesData.GameDevelopment.subhead4'),
            subpara4: t('servicesData.GameDevelopment.subpara4')
        },
        {
            id: 2,
            mainHeading: t('servicesData.ECommerceDevelopment.mainHeading'),
            mainpara: t('servicesData.ECommerceDevelopment.mainpara'),
            mainparaSubHead: t('servicesData.ECommerceDevelopment.mainparaSubHead'),
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
            mainparaSubHead: t('servicesData.BlockchainDevelopment.mainparaSubHead'),
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
    const { serviceId } = useParams()
    const [serviceData, setServiceData] = useState(servicesData[serviceId])

    console.log(serviceData);

    return (
        <div className='flex items-center justify-center h-screen mx-auto bg-slate-200 '>

            <div className=' border-2 border-black    max-md:px-5  p-10 
             w-[75%] max-md:w-[90%]  
              bg-slate-100 z-30  opacity-[0.9]  shadow-md Elemt  ' >




                <div className='flex justify-between max-md:flex-col'>
                    <div className=' w-[60%] max-md:w-full flex flex-col items-start my-5 '>
                        <Heading className="text-center font-semibold text-[2rem] max-md:text-[1.5rem] max-md:mx-auto text-black " as="h1"
                            text={serviceData.mainHeading} />
                        <p className='mt-3 font-semibold'>{serviceData.mainparaSubHead}</p>
                        <p className='text-[0.9rem] mt-2 max-md:text-center max-md:text-sm'>{serviceData.mainpara}</p>
                    </div>
                    <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-6'>
                  
                    <path fill="#050505" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </a>

                </div>
                <ul className='w-[70%] max-md:w-[100%] max-md:mt-5 list-disc  mt-10'>
                    <Heading className="text-left font-semibold text-xl max-md:text-[1rem] text-black " as="h1"
                        text={serviceData.subHeading} />

                    <li className='my-2 ml-8 text-lg '>{serviceData.subpara}</li>
                    <li className='my-2 ml-8 text-lg'>{serviceData.subhead1}</li>
                    <li className='my-2 ml-8 text-lg'>{serviceData.subpara1}</li>
                    <li className='my-2 ml-8 text-lg'>{serviceData.subhead2} </li>
                    {serviceData.id === 1 ? <li className='my-2 ml-8 text-lg'>{serviceData.subheadExtra} </li> : ""}


                </ul>
                {serviceData.id === 3 && <Heading className="text-left font-semibold mt-10 text-xl max-md:text-[1rem] text-black " as="h1"
                    text={serviceData.subpara3} />}

                {
                    serviceData.id === 0 && (
                        <ul className='w-[70%] max-md:w-[100%] max-md:mt-5 list-disc list-inside mt-10'>
                            <Heading className="text-left font-semibold text-xl max-md:text-[1rem] text-black " as="h1"
                                text={serviceData.subpara2} />
                            <li className='my-2 ml-4 text-lg'>{serviceData.subhead3}</li>
                            <li className='my-2 ml-4 text-lg'>{serviceData.subpara3}</li>
                            <li className='my-2 ml-4 text-lg'>{serviceData.subhead4}</li>



                        </ul>
                    )
                }

                {
                    serviceData.id === 2 && (
                        <div className='w-[70%] max-md:w-[100%] max-md:mt-5 list-disc list-inside mt-10'>
                            <Heading className="text-left font-semibold text-xl max-md:text-[1rem] text-black " as="h1"
                                text={serviceData.subpara2} />
                            <p className='my-2 ml-8 text-lg'>{serviceData.subhead3}</p>
                            <Heading className="text-left font-semibold mt-10 text-xl max-md:text-[1rem] text-black " as="h1"
                                text={serviceData.subpara3} />




                        </div>
                    )
                }



            </div>

        </div>















    )
}

export default IndiService