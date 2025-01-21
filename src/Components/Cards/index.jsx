import React, { useState, useEffect } from 'react';
import cardBg from '../../assets/cardsBg.svg'
import { useTranslation } from 'react-i18next';

const CommentCards = () => {
    const { t } = useTranslation();

    const cards = [
        {  content: t('cardsdata') },
        { content: t('cardsdata')},
        {  content: t('cardsdata') },
     
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [cards.length]);

    return (
      <div className='relative'>
        <div className='-z-10 absolute top-[-10vh] left-[-5vw] max-md:left-[-20vw] max-md:top-[-9vh] h-[30vh]  w-[32vw]  max-md:w-[90vw] cardBgImage '>
            <img src={cardBg} alt=""  className=' object-cover max-md:w-full max-md:h-auto'/>
          </div>
           <ul className="cards  mb-10  ">
          
            {cards.map((card, index) => (
                <li
                    key={index}
                    className={`card shadow-xl ${index === currentCardIndex ? 'card--current' : 'card--out'} `}
                >
                    
                    <p className='text-center text-lg max-md:text-sm'>{card.content}</p>
                </li>
            ))}
        </ul>
      </div>

        
    );
};

export default CommentCards;
