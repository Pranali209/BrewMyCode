import React, { useState, useEffect } from 'react';
import cardBg from '../../assets/cardsBg.svg'

const CommentCards = () => {
    const cards = [
        {  content: "Expert guidance to simplify your journey Expert guidance to simplify your journey" },
        { content: "Expert guidance to simplify your journey Expert guidance to simplify your journey" },
        {  content: "Expert guidance to simplify your journey Expert guidance to simplify your journey" },
     
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 3000); // Change card every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [cards.length]);

    return (
      <div className='relative'>
        <div className='-z-10 absolute top-[-10vh] left-[-5vw]  h-[30vh]  w-[32vw] '>
            <img src={cardBg} alt=""  className=' object-cover max-md:w-full max-md:h-auto'/>
          </div>
           <ul className="cards  mb-10 ">
          
            {cards.map((card, index) => (
                <li
                    key={index}
                    className={`card ${index === currentCardIndex ? 'card--current' : 'card--out'} `}
                >
                    
                    <p className='text-center text-lg'>{card.content}</p>
                </li>
            ))}
        </ul>
      </div>

        
    );
};

export default CommentCards;