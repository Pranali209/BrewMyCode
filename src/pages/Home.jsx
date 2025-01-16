import React, { useState } from 'react'

import Header from '../Components/header';
import Heading from '../Components/Heading';
import AnimatedBlock from '../Components/AnimatedBlock';
import Button from '../Components/Button';
import Services from '../Components/Services';
import Service1 from '../assets/services1.svg';
import Service2 from '../assets/services2.svg';
import Service3 from '../assets/services3.svg';
import Service4 from '../assets/services4.svg';
import MyCarousel from '../Components/AnimatedCards';
import ServiceBox from '../Components/ServiceBox';
import WorkBox from '../Components/Work';
import Testimonials from '../Components/Testimonial';
import Footer from '../Components/Footer';
import FooterAnimation from '../Components/FooterAnimation';
import { useNavigate } from 'react-router';

function Home() {
    
    const navigate = useNavigate()
    function HandleClicked(serviceId) {
        navigate(`/service/${serviceId}`)
        
    }

    function handleBookCall(params) {
        navigate('/form')
    }
    const ServiceData = [
        {
            id: 1,
            icon: Service1,
            title: "Who we are",
            description: "At Brewmycode, we're a small, passionate team turning visions into reality. We love what we do, crafting unique solutions for every founder. No one-size-fits-all—just tailored tech for your ideas.",
            bgcolour : "#D3F7FF",
            border : "#30DAFF"
        },
        {
            id: 2,
            icon: Service2,
            title: "What makes us Different",
            description: "We blend creativity with practicality. No buzzwords, just clear solutions. We thrive on making your dreams real, treating your ideas like our own.",
            bgcolour : "#E4FFEA",
              border : "#15F847"
        },
        {
            id: 3,
            icon: Service3,
            title: "Our Promise",
            description: "We are your tech partner, not just a service provider. We care about your goals and take pride in every line of code. Your success drives us",
            bgcolour : "#FFE3F0",
            border : "#FF3696"
        },
        {
            id: 4,
            icon: Service4,
            title: "Why Trust Us",
            description: "Direct Communication: Talk to real developers. Tailored Solutions: We listen first, then build. Passion for Startups: Your dreams fuel our passion.",
            bgcolour : "#FFFDD3",
              border : "#FFF628"
        }
    ]

    return (
        <div className=''>
            <section id="Navbar">
                <div>

                    <Header/>
                   
                </div>
            </section>
            <section id="Hero" className='mt-20 w-[50%] mx-auto relative  max-md:px-5 max-md:w-full max-md:mt-10'>
                <Heading className="text-7xl text-center font-semibold  leading-snug  txtaligmnt max-md:leading-relaxed" as="h1"
                    text=" Turning Ideas Into  Digital Solutions" />
                <AnimatedBlock />
            </section>
            <div className='mt-10 w-[50%] max-md:w-full mx-auto flex flex-col items-center  max-md:px-5'>
                <Heading className="text-black mx-auto text-center" as="p"
                    text="Brewmycode is a development agency passionate about transforming ideas into powerful digital solutions—web,  blockchain, AI, game development, and more." />
                <Button className=' bg-black mt-10 text-white px-4 p-2 mx-auto'  onClick={handleBookCall} txt="Let's Talk" />
            </div>
            <section id="watweOffer" className=' mt-16  max-md:px-5'>
                <Heading className="text-center  font-semibold text-[2.5rem] max-md:text-[2rem] " as="h1"
                    text="What we Offer" />

                <Heading className="text-black mx-auto mt-5 text-center w-[60%] max-md:w-full leading-relaxed" as="p"
                    text="Tech that Solves Real Problems We provide solutions- web, e-commerce, Blockchain, AI, game development, and more. Your ideas transformed into digital experiences—fast and effective." />


            </section>

            <section id="Services" className=' my-20  max-md:px-5'>
                <Heading className="text-center  font-semibold  text-[2.5rem]  max-md:text-[2rem] " as="h1"
                    text="Our Services" />
                <Services  HandleClicked = {HandleClicked} />
            </section>
            <section id="WhyUs" className='my-20'>
                <div className=' bg-black w-full p-2 mb-12' >
                    <Heading className="text-center font-semibold  text-[2rem] text-white " as="h1"
                        text="Technology we support" />
                </div>
                <MyCarousel />
            </section>

            <section id="KnowusMore" className='my-24 '>
                <div className=' bg-black w-full p-2 mb-12 ' >
                    <Heading className="text-center  font-semibold  text-[2rem] text-white " as="h1"
                        text="Know more about BrewmyCode " />
                </div>
                <div className="grid grid-cols-3  max-md:grid-cols-3 gap-[-10px] my-24 max-md:my-16 px-5">
                    <div className="text-7xl  font-semibold  text-center max-md:text-4xl">+10
                        <p className='text-lg font-normal mt-2 max-md:text-sm'>Years of Experience</p>
                    </div>
                    <div className="text-black text-7xl  font-semibold  text-center max-md:text-4xl">+50
                        <p className='text-lg  font-normal mt-2 max-md:text-sm'>Projects Completed</p>
                    </div>
                    <div className="text-black text-7xl  font-semibold  text-center max-md:text-4xl">+25
                        <p className='text-lg font-normal  mt-2 max-md:text-sm'>World wide Clients</p>
                    </div>
                </div>
                <div className="flex
                 max-md:flex-col justify-around  mt-36 max-md:mt-14 flex-wrap mx-10 max-md:ml-4 max-md:px-2">
                    {ServiceData.map((service) => (

                        <ServiceBox {...service} />
                    ))}
                </div>
            </section>

            <section id="Work">
                <div className=' bg-black w-full p-2 mb-12' >
                    <Heading className="text-center font-semibold text-[2.5rem] text-white " as="h1"
                        text="Our Work" />
                </div>
                <Heading className="text-center text-lg leading-relaxed px-48  py-20  max-md:px-5 max-md:py-10 " as="p"
                    text="We’ve worked on a lot of projects—e-commerce, blockchain, games, and more. Here, we showcase our best. Each project is a journey we take together, tackling challenges and celebrating wins as friends." />

                <WorkBox />
            </section>
            <section id="clients" className='py-20'>
                <Heading className="text-center font-semibold text-[2.5rem] text-black " as="h1"
                    text="Words From our Clients " />
                <Heading className="text-center  text-lg leading-relaxed px-48 py-10 max-md:px-2 max-md:py-10 text-black " as="p"
                    text="Here’s what some of our clients have to say about working with us: " />
                <Testimonials />
            </section>

            <section id='NeedHelp' className='py-40 flex flex-col items-center'>

                <Heading className="text-center font-semibold text-[2.5rem] text-black " as="h1"
                    text="Need Something More ? " />
                <Heading className="text-center  text-lg leading-relaxed px-48 max-md:px-2 max-md:py-10  py-10 text-black " as="p"
                    text="We craft custom plans to fit your website’s specific needs. Contact Us " />
                <Button className=' bg-black mt-5 text-white text-lg px-8 py-3 p-2 mx-auto hover:scale-75
                shadow-md transition-all' txt="Book a Call"
                onClick={handleBookCall} />
            </section>

             
            <section>
                <Footer/>
                <FooterAnimation/>
            </section>
           
        </div>
    )
}

export default Home