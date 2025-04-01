import React, { useState } from 'react';

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
import CommentCards from '../Components/Cards';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    function HandleClicked(serviceId) {
        navigate(`/service/${serviceId}`);
    }

    function handleBookCall(params) {
        window.location.href = "https://cal.com/brewmycode/discovery-call?user=brewmycode";
    }

  
    const ServiceData = [
        {
            id: 1,
            icon: Service1,
            title: t('ServiceData.whoWeAre.title'),
            description: t('ServiceData.whoWeAre.description'),
            bgcolour: "#D3F7FF",
            border: "#30DAFF"
        },
        {
            id: 2,
            icon: Service2,
            title: t('ServiceData.whatMakesUsDifferent.title'),
            description: t('ServiceData.whatMakesUsDifferent.description'),
            bgcolour: "#E4FFEA",
            border: "#15F847"
        },
        {
            id: 3,
            icon: Service3,
            title: t('ServiceData.ourPromise.title'),
            description: t('ServiceData.ourPromise.description'),
            bgcolour: "#FFE3F0",
            border: "#FF3696"
        },
        {
            id: 4,
            icon: Service4,
            title: t('ServiceData.whyTrustUs.title'),
            description: t('ServiceData.whyTrustUs.description'),
            bgcolour: "#FFFDD3",
            border: "#FFF628"
        }
    ];

    

    return (
        <div className=''>
            <section id="Navbar">
                <div>
                    <Header />
                </div>
            </section>

            <section id="Hero" className='mt-20 w-[50%] mx-auto relative max-md:px-5 max-md:w-full max-md:mt-14'>
                <Heading className="font-semibold leading-snug text-center text-7xl txtaligmnt" as="h1"
                    text={t('mainHeading')} />
                <AnimatedBlock />
            </section>

            <div className='my-32 w-[50%] max-md:w-full mx-auto flex flex-col items-center max-md:px-5 max-md:my-20'>
                <Heading className="mx-auto text-center text-black max-md:text-sm" as="p"
                    text={t('mainPara')} />
                <Button className='p-2 px-4 mx-auto mt-10 text-white bg-black' onClick={handleBookCall} txt={t('BtnTxtletsTalk')} />
            </div>
          

            <section id="Services" className='my-20 max-md:px-5'>
                <Heading className="text-center font-semibold text-[2.5rem] max-md:text-[2rem]" as="h1"
                    text={t('ServiceHeading')} />
                <Services HandleClicked={HandleClicked} />
            </section>

            <section id="whyus" className='flex items-center justify-around px-24 mt-14 max-md:mt-20 max-md:mb-44 mb-52 max-md:flex-col max-md:px-10'>
                <Heading className="text-center font-semibold text-[2rem] text-black max-md:mb-20" as="h1"
                    text={t('whybrewHeading')} />
                <CommentCards />
            </section>

            <section id="Technology" className='my-20'>
                <div className='w-full p-2 mb-12 bg-black'>
                    <Heading className="text-center font-semibold text-[2rem] text-white" as="h1"
                        text={t('TechHeading')} />
                </div>
                <MyCarousel />
            </section>
            
            {/* <section id="KnowusMore" className='my-20'>
                <div className='w-full p-2 mb-12 bg-black'>
                    <Heading className="text-center font-semibold text-[2rem] text-white" as="h1"
                        text={t('KnowmoreHeading')} />
                </div>
                <div className="grid grid-cols-3 max-md:grid-cols-3 gap-[-10px] my-24 max-md:my-16 px-5">
                    <div className="font-semibold text-center text-7xl max-md:text-4xl">{t('exp1')}
                        <p className='mt-2 text-lg font-normal max-md:text-sm'>{t('exp1sub')}</p>
                    </div>
                    <div className="font-semibold text-center text-black text-7xl max-md:text-4xl">{t('exp2')}
                        <p className='mt-2 text-lg font-normal max-md:text-sm'>{t('exp2sub')}</p>
                    </div>
                    <div className="font-semibold text-center text-black text-7xl max-md:text-4xl">{t('exp3')}
                        <p className='mt-2 text-lg font-normal max-md:text-sm'>{t('exp3sub')}</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-around mx-10 max-md:justify-between mt-36 max-md:mt-14 max-md:px-2">
                    {ServiceData.map((service) => (
                        <ServiceBox {...service} />
                    ))}
                </div>
            </section> */}
            <section id="Work" className='my-20'>
                <div className='w-full p-2 mb-12 bg-black'>
                    <Heading className="text-center font-semibold text-[2.5rem] text-white" as="h1"
                        text={t('workHeading')} />
                </div>
                <Heading className="px-48 py-20 text-lg leading-relaxed text-center max-md:text-sm max-md:px-5 max-md:py-10" as="p"
                    text={t('worksub')} />
                <WorkBox />
            </section>
            {/* <section id="clients" className='py-10'>
                <Heading className="text-center font-semibold text-[2.5rem] text-black" as="h1"
                    text={t('testimonalhead')} />
                <Heading className="px-48 py-10 text-lg leading-relaxed text-center text-black max-md:text-sm max-md:px-2 max-md:py-10" as="p"
                    text={t('testimonialsub')} />
                <Testimonials />
            </section> */}
            <section id='NeedHelp' className='flex flex-col items-center py-40'>
                <Heading className="text-center font-semibold text-[2.5rem] text-black" as="h1"
                    text={t('NeedHelpHeading')} />
                <Heading className="px-48 py-10 text-lg leading-relaxed text-center text-black max-md:text-sm max-md:px-2 max-md:py-10"
                    text={t('NeedHelpsub')} />
                <Button className='p-2 px-8 py-3 mx-auto mt-5 text-lg text-white transition-all bg-black shadow-md hover:scale-75' txt={t('btnNeedHelp')}
                    onClick={handleBookCall} />
            </section>
            <section id='footer'>
                <Footer handleBookCall={handleBookCall} />
                <FooterAnimation />
            </section>
        </div>
    );
}

export default Home;
