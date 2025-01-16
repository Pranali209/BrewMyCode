import React from 'react'
import Wave from 'react-wavify'
import Icons from '../../assets/icon1.gif'
import Heading from '../Heading'
function FooterAnimation() {
  return (
    <div className='  relative   '>
        <Heading className= " text-white text-[11rem] max-md:text-[2.8rem] font-bold text-center absolute footeraligment top-[-55px] left-[6rem]  max-md:top-[35px]"  as = "h1" text= "BREWMYCODE"/> 
<Wave fill='black'
    paused={false}
    style={{ display: 'flex', height:'320px' }}
    options={{
      height:40,
      amplitude: 20,
      speed: 0.5,
      points: 4
    }}
/>
<section className=' w-full  absolute bottom-1 flex max-md:flex-col max-md:justify-center  py-[28px] px-[30px] justify-between text-white'>
                <section className='flex text-left max-md:text-center max-md:flex-col max-md:mb-3'>
                    <nav>
                        <a href="/en/contact" className='text-white'>Contact us</a>
                    </nav>
                </section>
                <section className="relative text-center text-white max-md:mb-4">
                    <span >Made with</span>
                    <span className="relative inline-block overflow-hidden max-w-full">
                        <img src={Icons} className='w-[2rem] h-[1.9rem] mb-[-7px]'/>
                    </span>
                    <span>in Helsinki</span>
                </section>

                <section className='flex max-md:text-center max-md:flex-col '>
                    <nav>
                        <a href="/en/contact" >Linkedin</a>
                    </nav>
                </section>
            </section>

    </div>
    
  )
}

export default FooterAnimation