import React from 'react'
import one from '../../assets/01.svg'
import two from '../../assets/02.svg'
import three from '../../assets/03.svg'
import four from '../../assets/04.svg'

import blockChain from '../../assets/blockchain.svg'
import Ecomm from '../../assets/GameDev.svg'
import Game from '../../assets/webdev.svg'
import Web from '../../assets/ecommerce.svg'
import Heading from '../Heading'
import Button from '../Button'
import { useTranslation } from 'react-i18next'
function Services( {isClicked , HandleClicked}) {
    const { t } = useTranslation()
    const SData = [
        {
            id: 0,
            title: t('services.WebDevelopment.title'),
            NumberImg: one,
            descImg: Web,
            des: t('services.WebDevelopment.des')
        },
        {
            id: 1,
            title: t('services.GameDevelopment.title'),
            NumberImg: two,
            descImg: Game,
            des: t('services.GameDevelopment.des')
        },
        {
            id: 2,
            title: t('services.ECommerceSolutions.title'),
            NumberImg: three,
            descImg: Ecomm,
            des: t('services.ECommerceSolutions.des')
        },
        {
            id: 3,
            title: t('services.Blockchain.title'),
            NumberImg: four,
            descImg: blockChain,
            des: t('services.Blockchain.des')
        }
    ];
    return (
        <div className='px-20 flex flex-col  py-10 max-md:px-5'>
            {
                SData.map((data) => {
                    return (
                        <div className='flex justify-around items-center my-20 max-md:my-10 max-md:flex-col ' key={data.id}>
                            <div className='  relative    h-64 w-72 max-md:mb-24 '>
                                <img src={data.NumberImg} alt="" className=' animate-upDown' />
                                <div className=' bg-white  absolute  w-full flex flex-col max-md:px-5 '
                                style={data.id === 0 ? { marginTop: '-90px' } : { marginTop : '-67px'}}>
                                    <Heading className="text-xl text-left " as="h2"
                                        text={data.title}
                                    />
                                    <div className=' flex justify-end'>
                                        <img src={data.descImg} alt="" className="w-[11rem] h-[11rem]  " />
                                    </div>

                                </div>
                            </div>
                            <div className=' w-[55%] max-md:w-full '>
                                <Heading className= " text-lg leading-relaxed max-md:text-sm max-md:leading-snug" as="p"
                                text = {data.des}/> 
                                <Button className=' bg-black mt-10 text-white px-4 p-2 mx-auto'
                                 txt={t('serviceBtn')}
                                 onClick = {()=>HandleClicked(data.id)}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Services