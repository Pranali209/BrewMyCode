import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from '../Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function FormComp() {
    const { t } = useTranslation();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');

    const [formdata, setFormdata] = useState({})

    const handleDateChange = (date) => {

        if (date > new Date()) {
            setSelectedDate(date);
            console.log(selectedDate);
        }
    };
    const handleTimeChange = (time) => { setSelectedTime(time); };

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(selectedDate);

        if (selectedDate < new Date()) {
            alert('Please select a date in the future')
        }
        else {



            if (e.target[0].value < 0 || e.target[1].value < 0 || e.target[2].value < 0 || selectedDate.toISOString().length == 0 ||
                selectedTime.length == 0) {
                alert('Please fill in all fields');
            }
            else {
                setFormdata({
                    name: e.target[0].value,
                    date: selectedDate.toISOString().slice(0, 10),
                    time: selectedTime,
                    phone: e.target[1].value,
                    email: e.target[2].value
                })

                e.target.reset()
                setSelectedTime('')
                setSelectedDate(new Date())


                alert("Data submitted Successfully");
            }

        }

    }




    const navigate = useNavigate()

    const times = ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30'];



    return (
        <div className="container mx-auto py-10 flex justify-between max-md:flex-col">
            <section className="w-[50%] max-md:w-[80%]">
                <div className="bg-[#0a0b0b] text-white p-4 w-full mb-8 px-32 max-md:px-10 py-8 rounded-r-md">
                    <h2 className="text-4xl font-bold mb-2">{t('formSection.greeting')}</h2>
                    <p className="text-lg mt-5 w-[70%]">{t('formSection.schedule')}</p>
                    <p className="text-sm mt-5">{t('formSection.optionalCall')}</p>
                </div>

                <div className="grid grid-cols-1 gap-8 max-md:gap-4 px-20 max-md:px-5">
                    <div >
                        {
                            
                            !(selectedDate > new Date()) &&(

                            
                            <section className=' shadow-lg '>
                                <h3 className="text-xl font-bold mb-4  ml-5 mt-5 ">{t('formSection.chooseDate')}</h3>
                                <div className="bg-white shadow-lg rounded-lg p-2">
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={selectedDate}
                                        className={`!w-[643px] max-md:!container max-sm:!container !border-none `}
                                    />
                                </div>

                            </section>
                        )}

                        {selectedDate > new Date() && (
                            <section className={` slide-in py-3 px-5`}>
                                <h3 className="text-xl font-bold mb-6">{t('formSection.pickTime')}</h3>
                                <div className="grid grid-cols-3 gap-[4rem] max-md:gap-5 m-5">
                                    {times.map((time) => (
                                        <button
                                            key={time}
                                            className={`bg-[#f4f4f5] hover:bg-black hover:text-white max-md:px-2 max-md:mb-5 text-black px-4 py-2 rounded-md ${selectedTime === time ? 'bg-black text-white' : ''}`}
                                            onClick={() => handleTimeChange(time)}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </section>
                        )
                        }

                        <p className="text-sm mt-4">{t('formSection.allTimes')}</p>
                        <div className="flex justify-center mt-11 items-center">

                        </div>
                    </div>
                </div>
            </section>
            <div className="w-[40%] max-md:mt-5 max-md:w-full">
                <div className="bg-white p-4">
                    <form onSubmit={(e) => handleFormSubmit(e)}>
                        <div className="mb-4">
                            <label htmlFor="full_name" className="block text-black font-bold mb-2">
                                {t('formSection.fullName')}
                            </label>
                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                className="w-full bg-[#f4f4f5] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2562eb]"
                                placeholder={t('formSection.enterName')}

                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone_number" className="block text-black font-bold mb-2">
                                {t('formSection.phoneNumber')}
                            </label>
                            <input
                                type="tel"
                                id="phone_number"
                                name="phone_number"
                                className="w-full bg-[#f4f4f5] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2562eb]"
                                placeholder={t('formSection.enterPhoneNumber')}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-black font-bold mb-2">
                                {t('formSection.email')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-[#f4f4f5] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2562eb]"
                                placeholder={t('formSection.enterEmail')}
                            />
                        </div>
                        <p className="text-black my-12">{t('formSection.connectTeam')}</p>

                        <p className="text-gray-600 mt-4">{t('formSection.bringQuestions')}</p>
                        <div className="flex justify-center mt-28 items-center">
                            <button
                                className="bg-[#CCCAD1] text-black py-2 px-[3.75rem] rounded-md max-md:px-3 "
                                onClick={() => navigate('/')}
                            >
                                {t('formSection.back')}
                            </button>
                            <button
                                className={`bg-black text-white py-2 px-[3.75rem] rounded-md ml-5 max-md:px-3 ${selectedDate && selectedTime && formdata ? "enabledBtn" : "disabledBtn"}`}
                            >
                                {t('formSection.submit')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};








export default FormComp;
