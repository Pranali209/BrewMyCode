import React, { useState, useEffect } from 'react';
import cardBg from '../../assets/cardsBg.svg'
import { useTranslation } from 'react-i18next';


const CommentCards = () => {
    const { t } = useTranslation();

    const cards = [
        { Htxt: t('cardshead1'), content: t('cardsData3') },
        { Htxt: t('cardshead2') ,content: t('cardsData2')},
        { Htxt:t('cardshead3'), content: t('cardsData3') },
     
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const[currentCardTxt , setCurrentCartTxt] = useState(cards[0].Htxt)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
           
          
            console.log(currentCardIndex , "before");
        }, 2000); 
      
        console.log(currentCardIndex , "after");
        return () => clearInterval(interval); 
    }, []);

    return (
      <div className='relative'>
        <div className='-z-10 absolute top-[-10vh] left-[-5vw] max-md:left-[-20vw] max-md:top-[-9vh] h-[30vh]  w-[32vw]  max-md:w-[90vw] cardBgImage '>
            <img src={cardBg} alt=""  className='object-cover max-md:w-full max-md:h-auto'/>
          </div>
           <ul className="mb-10 cards ">
          
            {cards.map((card, index) => (
                <>
                 
                 
                  
                 <li
                    key={index}
                    className={`card shadow-xl ${index === currentCardIndex ? 'card--current' : 'card--out'} `} >
                     <h2 className='font-semibold max-md:text-xs '>{card.Htxt}</h2>
                     <p className='text-sm max-md:text-xs'>{card.content}</p>
                     
                   
                </li>
                
                </>
               
            ))}
        </ul>
      </div>

        
    );
};

export default CommentCards;
