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
        navigate('/form');
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
                <Heading className="text-7xl text-center font-semibold leading-snug txtaligmnt" as="h1"
                    text={t('mainHeading')} />
                <AnimatedBlock />
            </section>

            <div className='my-32 w-[50%] max-md:w-full mx-auto flex flex-col items-center max-md:px-5 max-md:my-20'>
                <Heading className="text-black mx-auto text-center max-md:text-sm" as="p"
                    text={t('mainPara')} />
                <Button className='bg-black mt-10 text-white px-4 p-2 mx-auto' onClick={handleBookCall} txt={t('BtnTxtletsTalk')} />
            </div>
            <section id="watweOffer" className='my-20 max-md:px-5 max-md:my-20'>
                <Heading className="text-center font-semibold text-[2.5rem] max-md:text-[2rem]" as="h1"
                    text={t('OfferHeading')} />
                <Heading className="text-black max-md:text-sm mx-auto mt-5 text-center w-[60%] max-md:w-full leading-relaxed" as="p"
                    text={t('offerPara')} />
            </section>

            <section id="Services" className='my-20 max-md:px-5'>
                <Heading className="text-center font-semibold text-[2.5rem] max-md:text-[2rem]" as="h1"
                    text={t('ServiceHeading')} />
                <Services HandleClicked={HandleClicked} />
            </section>

            <section id="whyus" className='mt-14 max-md:mt-20 max-md:mb-44 mb-52 flex justify-around items-center max-md:flex-col px-24 max-md:px-10'>
                <Heading className="text-center font-semibold text-[2rem] text-black max-md:mb-20" as="h1"
                    text={t('whybrewHeading')} />
                <CommentCards />
            </section>

            <section id="Technology" className='my-20'>
                <div className='bg-black w-full p-2 mb-12'>
                    <Heading className="text-center font-semibold text-[2rem] text-white" as="h1"
                        text={t('TechHeading')} />
                </div>
                <MyCarousel />
            </section>
            
            <section id="KnowusMore" className='my-20'>
                <div className='bg-black w-full p-2 mb-12'>
                    <Heading className="text-center font-semibold text-[2rem] text-white" as="h1"
                        text={t('KnowmoreHeading')} />
                </div>
                <div className="grid grid-cols-3 max-md:grid-cols-3 gap-[-10px] my-24 max-md:my-16 px-5">
                    <div className="text-7xl font-semibold text-center max-md:text-4xl">{t('exp1')}
                        <p className='text-lg font-normal mt-2 max-md:text-sm'>{t('exp1sub')}</p>
                    </div>
                    <div className="text-black text-7xl font-semibold text-center max-md:text-4xl">{t('exp2')}
                        <p className='text-lg font-normal mt-2 max-md:text-sm'>{t('exp2sub')}</p>
                    </div>
                    <div className="text-black text-7xl font-semibold text-center max-md:text-4xl">{t('exp3')}
                        <p className='text-lg font-normal mt-2 max-md:text-sm'>{t('exp3sub')}</p>
                    </div>
                </div>
                <div className="flex justify-around max-md:justify-between mt-36 max-md:mt-14 flex-wrap mx-10 max-md:px-2">
                    {ServiceData.map((service) => (
                        <ServiceBox {...service} />
                    ))}
                </div>
            </section>
            <section id="Work" className='my-20'>
                <div className='bg-black w-full p-2 mb-12'>
                    <Heading className="text-center font-semibold text-[2.5rem] text-white" as="h1"
                        text={t('workHeading')} />
                </div>
                <Heading className="text-center max-md:text-sm text-lg leading-relaxed px-48 py-20 max-md:px-5 max-md:py-10" as="p"
                    text={t('worksub')} />
                <WorkBox />
            </section>
            <section id="clients" className='py-10'>
                <Heading className="text-center font-semibold text-[2.5rem] text-black" as="h1"
                    text={t('testimonalhead')} />
                <Heading className="text-center max-md:text-sm text-lg leading-relaxed px-48 py-10 max-md:px-2 max-md:py-10 text-black" as="p"
                    text={t('testimonialsub')} />
                <Testimonials />
            </section>
            <section id='NeedHelp' className='py-40 flex flex-col items-center'>
                <Heading className="text-center font-semibold text-[2.5rem] text-black" as="h1"
                    text={t('NeedHelpHeading')} />
                <Heading className="text-center max-md:text-sm text-lg leading-relaxed px-48 max-md:px-2 max-md:py-10 py-10 text-black"
                    text={t('NeedHelpsub')} />
                <Button className='bg-black mt-5 text-white text-lg px-8 py-3 p-2 mx-auto hover:scale-75 shadow-md transition-all' txt={t('btnNeedHelp')}
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
