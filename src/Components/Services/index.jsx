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
function Services( {isClicked , HandleClicked}) {
    const SData = [
        {
            id: 0,
            title: "Web Development",
            NumberImg: one,
            descImg: Web,
            des: "Websites using AI. Platforms that grow with you. Unlock personalized user experiences powered by machine learning. Transform static pages into dynamic, intelligent solutions tailored to your audience. Drive engagement and efficiency with automated insights and adaptive designs."

        }, {
            id: 1,
            title: "Game Development",
            NumberImg: two,
            descImg: Game,
            des: "Blockchain and crypto made simple. Easy integration. Empower your business with secure, decentralized solutions. Seamlessly tokenize assets and explore NFT opportunities. Build trust with cutting-edge blockchain technology tailored to your needs."
        }, {
            id: 2,
            title: "E- commerce Solutions",
            NumberImg: three,
            descImg: Ecomm,
            des: "Create immersive worlds with stunning visuals and seamless gameplay. Turn concepts into reality with cutting-edge tools and expert development. Build games that captivate and inspire players worldwide."

        }, {
            id: 3,
            title: "Blockchain",
            NumberImg: four,
            descImg: blockChain,
            des: "Optimize your e-commerce experience with intuitive design and robust functionality. Empower your business with seamless payment integrations and advanced analytics. Create a platform that adapts and thrives as you grow."
        }
    ]
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
                                <Heading className= " text-lg leading-relaxed" as="p"
                                text = {data.des}/> 
                                <Button className=' bg-black mt-10 text-white px-4 p-2 mx-auto'
                                 txt="Learn More ->" 
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