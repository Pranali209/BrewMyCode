import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../Button';
import { useNavigate } from 'react-router';


function FormComp() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (date) => { setSelectedDate(date); }; 
  const handleTimeChange = (time) => { setSelectedTime(time); };

   const navigate = useNavigate()
  
  const times = ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30'];

  return (
   

    
    <div className="container mx-auto py-20 flex justify-between max-md:flex-col ">
        <section className='w-[50%] max-md:w-[90%]'>
      <div className="bg-[#0a0b0b] text-white p-4 w-full mb-8 px-32 max-md:px-10 py-12 rounded-r-md">
        <h2 className="text-4xl font-bold mb-2">Hello, Let's Talk!</h2>
        <p className='text-lg mt-5 w-[70%]'>Schedule a 30 min one-to-one call to discuss your goals and challenges</p>
        <p className="text-sm mt-5">This call is optional but highly recommended!</p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-md:gap-4 px-20 max-md:px-5">
        <div>
          <h3 className="text-xl font-bold mb-4">Choose a Date</h3>
          <div className="bg-white shadow-lg rounded-lg p-4 ">
           
            <Calendar onChange={handleDateChange} value={selectedDate}
            className="!w-[643px] max-md:!container max-sm:!container  !border-none " />
        
           
          </div>
          <h3 className="text-xl font-bold my-10">Pick a time</h3>
          <div className="grid grid-cols-3 gap-[5rem] max-md:gap-5 m-5">
            {times.map((time) => (
              <button
                key={time}
                className={`bg-[#f4f4f5] hover:bg-[#e4e4e7] max-md:px-2  max-md:mb-5 text-black px-4 py-2 rounded-md ${selectedTime === time ? 'bg-[#2562eb] text-white' : ''}`}
                onClick={() => handleTimeChange(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <p className="text-sm mt-4">All Times are in Indian Time</p>
          <div className="flex justify-center mt-11 items-center">
         
            <button className="bg-[#CCCAD1] text-black py-2 px-[3.75rem] rounded-md max-md:px-2 "
            onClick={()=>navigate('/')}>Back</button>
            <button className="bg-black text-white py-2  px-[3.75rem] rounded-md ml-5 max-md:px-2">Continue</button>
          </div>
        </div>
        </div>
        </section>
        <div className='w-[40%] max-md:mt-16 max-md:w-full'>
          <div className="flex justify-around items-center mb-4 ">
          <div className="mb-4 flex flex-col items-center">
              <img src="https://placehold.co/100x100" alt="Krishna" className="rounded-full w-20 h-20 shadow-lg" />
              <p className="text-gray-600 mt-5">Krishna</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Onboarding Call</h3>
              <div className="flex items-center mt-7">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2562eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="ml-2">Duration</span>
              </div>
              <p className="text-black text-sm ml-5 mt-5">30-40 mins</p>
            </div>
            
          </div>
          <hr className=' mt-12 border-[1.4px] border-gray-400'/>
          <div className="bg-white  p-4 my-12">
            
            <form>
              <div className="mb-4">
                <label htmlFor="full_name" className="block text-black font-bold mb-2">Full name</label>
                <input type="text" id="full_name" name="full_name" className="w-full bg-[#f4f4f5] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2562eb]" placeholder="Enter Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone_number" className="block text-black font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone_number" name="phone_number" className="w-full bg-[#f4f4f5] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2562eb]" placeholder="Enter Phone Number" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-black font-bold mb-2">E-Mail</label>
                <input type="email" id="email" name="email" className="w-full bg-[#f4f4f5] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2562eb]" placeholder="Enter your email" />
              </div>
            </form>
            <p className="text-black my-12">Take this opportunity to connect with our team and discover how our platform can empower your business to reach new heights.</p>
            <ul className="list-none list-inside my-14">
              <li className='my-14'>✔️Customized website design</li>
              <li className='my-14'>✔️Affordable pricing</li>
              <li className='my-14'>✔️Seamless user experience</li>
              <li className='my-14'>✔️24/7 technical support</li>
              <li className='my-14'>✔️Integrated digital marketing tools</li>
            </ul>
            <p className="text-gray-600 mt-4">You can also bring any questions that you might have for us!</p>
          </div>
        </div>
     
    </div>
 
  );
}

export default FormComp;
