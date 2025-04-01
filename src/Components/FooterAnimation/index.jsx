import React from 'react'
import Wave from 'react-wavify'
import footergif from '../../assets/footergif.gif'
import Heading from '../Heading'
function FooterAnimation() {
  return (
    <div className='relative '>
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
                        <a href="mailto:info@brewmycode.com" className='text-white '>Contact us</a>
                    </nav>
                </section>
                <section className="relative text-center text-white max-md:mb-4">
                    <span >Made with</span>
                    <span >🤍</span>
                    <span>in Helsinki</span>
                </section>

                <section className='flex max-md:text-center max-md:flex-col '>
                    <nav>
                        <a className='text-white '>Brewmycode : 3518342-5</a>
                    </nav>
                </section>
            </section>

    </div>
    
  )
}

export default FooterAnimation