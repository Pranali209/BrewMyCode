import React, { useState } from 'react'

import BgWeb from '../assets/Webdevbg.svg'
import BgGame from '../assets/gamebg.svg'
import BgChain from '../assets/blockChainbg.svg'
import Bgecommerce from '../assets/ecommercebg.svg'
import Heading from '../Components/Heading'
import { useParams } from 'react-router';

const servicesData = [
    {
        id: 0,
        mainHeading: 'Web Develpoment',
        mainpara: "You need a website that works for you—efficient, scalable, and engaging. At Brewmycode, we focus on creating digital experiences that help you achieve your goals, whether you're starting from scratch or taking things to the next level.",
        subHeading: 'Custom Web Development',
        subpara: "From landing pages to complex platforms, we build tailored solutions that match your business needs. No cookie-cutter designs—only what works for you.",
        bgImage: BgWeb,
        subhead1: "AI & ML Integration",
        subpara1: "When it comes to creating brilliant work and a happy workplace where everyone is able to be their true selves, sharing isn’t optional. It’s vital.",
        subhead2: "Responsive Design",
        subpara2: "We know people have put a lot into their businesses, so we care about what we do and are dedicated to finding the people who help us do it well.",
        subhead3: "Scalable and Secure",
        subpara3: "We stand up for the causes we’re driven by, the ideas we cherish and the values we live and breathe.",
        subhead4: "Ever questioning",
        subpara4: "Our roles transcend our desks. Finding fulfilment comes with asking questions, challenging assumptions and absorbing the world around us"
    },
    {
        id:1,
        mainHeading: 'Game Development',
        mainpara: "Your business needs a mobile app that works—fast, reliable, and easy for your users. At Brewmycode, we make apps that reach your users wherever they are, providing simple experiences that fit your goals.",
        subHeading: 'Custom Mobile Apps That Drive Success We build apps that help your business grow.',
        subpara: "",
        bgImage:BgGame ,
        subhead1: "Custom App Development",
        subpara1: "Whether you need an MVP or a full app, we develop what you need. No shortcuts, just the features your users want.",
        subhead2: "Cross-Platform Solutions",
        subpara2: "Reach users on both iOS and Android with one solution that works well everywhere.",
        subhead3: "User-Focused Design",
        subpara3: "We make it easy for people to use your app—so they keep coming back.",
        subhead4: "Scalable Backend",
        subpara4: "A backend that grows with you, keeping your data safe and your app running smoothly."
    },

    {
        id:2,
        mainHeading: 'E-Commerce Development Services',
        mainpara: "Your e-commerce store should do more than display products—it needs to convert, provide a seamless shopping experience, and scale with your growth. Brewmycode helps you create a store that does just that.",
        subHeading: 'E-Commerce That Works for You Transform your online presence with a store built for your customers.',
        subpara: "",
        bgImage: Bgecommerce,
        subhead1: "Custom E-Commerce Development",
        subpara1: "Get a solution tailored to your brand, from niche stores to expansive online marketplaces. We bring your vision to life.",
        subhead2: "User Experience Design",
        subpara2: "We prioritize making your store easy to use. A smooth, intuitive experience keeps shoppers engaged and encourages purchases.",
        subhead3: "Integrated Payments Offer",
        subpara3: "Offer customers a choice of payment methods that are safe and convenient, ensuring an easy checkout process every time.",
        subhead4: "Inventory Management Tools",
        subpara4: "Manage your products, inventory, and orders with streamlined, user-friendly systems that simplify your day-to-day operations."
    },

    {
        id:3,
        mainHeading: 'Blockchain Development Services',
        mainpara: "Robust, secure, and scalable blockchain solutions tailored to your business goals. At Brewmycode, we help you unlock the potential of blockchain technology.",
        subHeading: 'Blockchain Solutions That Drive Innovation',
        subpara: "Create blockchain applications that deliver security, transparency, and efficiency.",
        bgImage:  BgWeb,
        subhead1: "Custom Blockchain Development",
        subpara1: "Design and build blockchain solutions tailored to your specific business needs, whether it's a decentralized app, a private blockchain, or a custom solution.",
        subhead2: "Smart Contract Development",
        subpara2: "Automate processes securely with self-executing smart contracts built with precision and reliability.",
        subhead3: "Decentralized Applications (dApps)",
        subpara3: "Develop intuitive, high-performing decentralized applications for various use cases, from finance to supply chain.",
        subhead4: "Blockchain Integration",
        subpara4: "Seamlessly integrate blockchain into your existing systems to improve security, transparency, and efficiency."
    },

];

function IndiService() {
     const {serviceId }= useParams()
     const [serviceData , setServiceData] = useState( servicesData[serviceId])

     console.log(serviceData);
     
    return (
        <>
            <div className='-z-50 relative flex flex-col items-center bgimage   '>
                <img src={BgWeb} alt="" className=' object-cover' />
            </div>
            <div className=' absolute max-md:px-5  px-10 py-2   w-[75%] max-md:w-[90%] top-[8vh] left-[12.5vw] 
              bg-white z-30  opacity-[0.9]  shadow-md Elemt bgService ' >


                <Heading className="text-center font-semibold text-[2rem] text-black " as="h1"
                    text="Service " />
                   
                <div className='flex max-md:flex-col justify-between'>
                    <div className=' w-[50%] max-md:w-full flex flex-col items-start my-5 '>
                        <Heading className="text-center font-semibold text-[2rem] text-black " as="h1"
                            text={serviceData.mainHeading}/>
                        <p className='text-[0.9rem] mt-2 max-md:text-center'>{serviceData.mainpara}</p>
                    </div>
                    <div className='w-[30%] max-md:w-full flex justify-around max-md:justify-between items-center'>
                        <div className='flex flex-col items-start max-md:mr-7'>
                            <Heading className="text-center font-semibold text-[1.5rem] text-black " as="h1"
                                text="45%" />
                            <p className='w-[4.5rem]'>Boost in conversions for Brand Y.</p>
                        </div>
                        <div className='flex flex-col items-start'>
                            <Heading className="text-center font-semibold text-[1.5rem] text-black " as="h1"
                                text="10,000+" />
                            <p className='w-32'>New users within six months for Startup X.</p>
                        </div>
                    </div>

                </div>
                <div className='w-[70%] max-md:w-[100%] max-md:mt-10'>
                    <Heading className="text-left font-semibold text-[1.2rem] text-black " as="h1"
                        text={serviceData.subHeading} />
                    <p className='text-[0.9rem] mt-2 text-left'>{serviceData.subpara} </p>
                </div>
                <div className=' flex max-md:flex-col justify-between mt-10  max-md:mt-5'>
                    <div className='w-[40%] max-md:w-full flex flex-col items-start '>
                        <Heading className="text-center font-semibold text-[1.2rem] text-black " as="h1"
                            text={serviceData.subhead1} />
                        <p className='text-[0.9rem]'>{serviceData.subpara1}</p>
                    </div>
                    <div className='flex flex-col items-start w-[40%]  max-md:w-full  max-md:mt-5'>
                        <Heading className="text-center font-semibold text-[1.2rem] text-black " as="h1"
                            text={serviceData.subhead2} />
                        <p className='text-[0.9rem]'>{serviceData.subpara2}</p>
                    </div>
                </div>
                <div className=' flex max-md:flex-col justify-between  mt-14 max-md:mt-5'>
                    <div className='w-[40%] max-md:w-full  flex flex-col items-start '>
                        <Heading className="text-center font-semibold text-[1.2rem] text-black " as="h1"
                            text={serviceData.subhead3} />
                        <p className='text-[0.9rem]'>{serviceData.subpara3}</p>
                    </div>
                    <div className='flex flex-col items-start w-[40%] max-md:w-full  max-md:mt-5 '>
                        <Heading className="text-center font-semibold text-[1.2rem] text-black " as="h1"
                            text={serviceData.subhead4} />
                        <p className='text-[0.9rem]'>{serviceData.subpara4}</p>
                    </div>
                </div>
            </div>
        </>





    )
}

export default IndiService