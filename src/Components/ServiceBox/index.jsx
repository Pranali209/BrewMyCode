import React, { useState } from 'react'

function ServiceBox({ id, icon, title, description, bgcolour, border }) {

    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
        console.log();

    };
    return (
        <>
            <div className="flex flex-col items-start max-md:items-center w-[36%]  max-md:w-[45%] mb-16 max-md:mb-8  " >

                <div className={` rounded-xl   flex  items-center  gap-4 max-md:gap-4 border-[1px] border-gray-500`}
                    style={{ backgroundColor: `${bgcolour}`, borderColor: `${border}` }}>
                    <div className={` rounded-xl m-[0.2rem] p-2 gap-4  shadow-lg`}>
                        <img src={icon} alt="service1" className='inline-block w-5 h-5 mr-2 ' />

                        <span className="mr-2 text-lg font-semibold ">{title}</span>
                        <div className='inline p-1 hover:cursor-pointer'
                            style={{ backgroundColor: `${bgcolour}`, borderColor: `${border}` }} >
                            <span className="text-lg text-gray-600" onClick={toggleOptions}>{showOptions ? '-' : '+'}</span>
                        </div>
                        <div>

                        </div>


                    </div>

                </div>
                {
                    showOptions && (<>
                    
                        <p className="mt-5 mb-20 max-md:mb-10 max-md:mt-2 max-md:text-sm ">{description}</p>
                        <hr className="w-full mb-8 border-gray-300 max-md:mb-4" />
                    </>

                    )
                }


            </div>
          
        </>
    )
}

export default ServiceBox