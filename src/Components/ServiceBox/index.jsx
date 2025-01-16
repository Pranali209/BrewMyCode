import React, { useState } from 'react'

function ServiceBox({ id, icon, title, description , bgcolour ,border }) {
   
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
        console.log();
        
    };
    return (
        <>
            <div className="flex flex-col items-start w-[36%] max-md:w-[100%] mb-16 max-md:mb-8" key={id}>

                <div className={` rounded-xl   flex items-center gap-4 max-md:gap-2 border-[1px] border-gray-500`}
                style={{backgroundColor:`${bgcolour}` , borderColor : `${border}` }}>
                    <div className= {` rounded-xl m-[0.2rem] p-2 gap-4  shadow-lg`}>
                        <img src={icon} alt="service1" className=' w-5 h-5 inline-block mr-2' />

                        <span className="font-semibold text-lg mr-2 ">{title}</span>
                        <div className=' p-1  inline hover:cursor-pointer'
                         style={{backgroundColor:`${bgcolour}` , borderColor : `${border}` }} >
                            <span className="text-lg text-gray-600" onClick={toggleOptions}>{showOptions ? '-' : '+'}</span>
                        </div>
                        <div>
                        <ul id="design-options" className={showOptions ? 'ml-6' : 'hidden'}>
                            <li className="mb-2 mt-4 ">
                                <a href="#" className="hover:underline">
                                    UI Design &gt;
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="  hover:underline">
                                    Content Design &gt;
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className=" hover:underline">
                                    Graphic Design &gt;
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className=" hover:underline">
                                    Advertisement Creation &gt;
                                </a>
                            </li>
                        </ul>
                        </div>
                       

                    </div>

                </div>
                <p className="text-sm text-gray-600 mt-5 mb-3"> </p>
                <p className="mb-20 max-md:mb-10">{description}</p>
                <hr className="border-gray-300 w-full mb-8 max-md:mb-4" />
            </div>

        </>
    )
}

export default ServiceBox