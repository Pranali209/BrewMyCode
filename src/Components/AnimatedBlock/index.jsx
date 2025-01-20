import React, { useState, useEffect } from 'react';

const AnimatedBlock = () => {




    return (
        <>
            <div className="absolute top-[-4.4vh] left-[0.5vw] ">
                <div className={` p-2 rounded-full shadow-lg animate-upDown inner-shadow px-4 max-md:px-2 max-md:text-sm max-md:p-1  `} >E-COMMERCE</div>
            </div>
            <div className="absolute top-[-4.5vh] right-[-1.5vw]">
                <div className={` p-2 rounded-full shadow-lg  animate-bounce inner-shadow1   px-4 max-md:px-2 max-md:p-1 max-md:text-sm`} >WEB DEVELOPMENT</div>
            </div>
            <div className="absolute bottom-[-5.9vh] left-[1vw]">
                <div className={` p-2 rounded-full shadow-lg animate-circular  inner-shadow2 px-4 max-md:px-2 max-md:text-sm max-md:p-1 `}>GAME DEVELOPMENT</div>
            </div>
            <div className="absolute bottom-[-4.5vh] right-[1.5vw]">
                <div className={` p-2 rounded-full shadow-lg animate-upDown inner-shadow4 px-4 max-md:px-2 max-md:text-sm max-md:p-1`} >BLOCKCHAIN</div>
            </div>
            <div className="absolute bottom-[11.2vh] right-[10vw]">
                <div className={` p-2 rounded-full shadow-lg  animate-circular inner-shadow3 px-4 max-md:px-2 max-md:text-sm max-md:p-1 `}>AI</div>
            </div>
         
        </>

    );
};
export default AnimatedBlock