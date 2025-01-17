import React from 'react';
import Heading from '../Heading';
import Button from '../Button';

export default function Footer({handleBookCall}) {
  return (
    <footer className="container mx-auto p-8 px-14 py-16 max-md:px-8 bg-black text-white">
        <Heading  className="text-5xl font-semibold mb-4 text-white" as =" h1" text = "Stay ahead in the digital world!" />
  
      <p className="text-lg mb-6 mt-5 text-slate-100">Receive exclusive tips, trends, and updates on:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Web Development: Latest frameworks, tools, and best practices.</li>
        <li>Digital Solutions: Innovative strategies to enhance your online presence.</li>
      </ul>
      <p className="text-lg font-semibold mb-4">Write Your Email</p>
      <div className="flex justify-start">
        <input
          type="email"
            className="text-black max-md:w-[90%] w-[30%] px-2 py-2 mr-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your e-mail..."
        />
      
          <button className=' bg-[#D2F2FF]  text-black px-3 py-1 max-md:px-1  max-md:text-sm  rounded-full'
          onClick={handleBookCall} >Get in Touch</button>
      </div>

    </footer>
  );
}
