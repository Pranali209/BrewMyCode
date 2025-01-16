import React ,{ useEffect , useState} from 'react';
import Man from '../../assets/Person.svg'
import Female from '../../assets/Female.svg'
import Kid from '../../assets/Kid.svg'
const Testimonials = () => {
    const [ currentIndex , setCurrentIndex] = useState(0)
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }, [])
    const isMediumScreen = window.matchMedia('(max-width: 768px)').matches;
    const testimonials = [
        {
            name: 'Client A',
            img : Man,
            testimonial: 'Brewmycode Helped Us Turn Our Vision Into Reality. The Team Was Dedicated And Made The Process Smooth And Rewarding',
        },
        {
            name: 'Client B',
            img : Female,
            testimonial: 'We Went From An Idea To Over 1M Downloads, Thanks To The Incredible Support From Brewmycode.',
        },
        {
            name: 'Client C',
            img : Kid,
            testimonial: 'Their Approach Is Personal, And They Genuinely Care About Your Success. Highly Recommend',
        },
    ];

    return (
        <div className="container mx-auto p-8 max-md:p-2 max-md:overflow-hidden">

            <div className=" flex justify-around   max-md:justify-between slider-container"
             style={isMediumScreen ? { transform: `translateX(-${currentIndex * 75}%)` } : {}}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-black text-white p-8  max-md:p-6 rounded-3xl shadow-md w-[300px] py-14
                     justify-around  shadowBox  slide  max-md:mr-4">
                         <div class="dot"></div>
                        <div className="flex flex-col items-start mb-4">
                            <img src={testimonial.img} alt="" />
                            <h3 className="text-3xl font-bold mt-10">{testimonial.name}</h3>
                        </div>
                        <p className="text-base leading-relaxed text-gray-300">{testimonial.testimonial}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
