import React from 'react';

const LanguagePicker = ({showlangPicker , setLangPicker}) => {
  return (
    <div className="bg-white  shadow-lg rounded-lg p-4 w-64 absolute top-1 right-1 max-md:z-50 max-md:w-48">
      <div className="flex justify-between items-center mb-2">
        <p className="font-medium">Languages</p>
        <span className="material-symbols-outlined cursor-pointer"
        onClick={setLangPicker}> {showlangPicker ? "❌" :  ""}</span>
      </div>
      <div className=" rounded-lg">
        <div className="p-2 hover:bg-gray-100 cursor-pointer border border-gray-300">
          <p className=' inline-block'>Indian</p>
          <span className="material-symbols-outlined float-right">-</span>
        </div>
        <div className="p-2 hover:bg-gray-100 cursor-pointer">
          <p  className=' inline-block'>Other</p>
          <span className="material-symbols-outlined float-right">-</span>
        </div>
      </div>
      <button className="mt-2 text-gray-300 hover:underline ">+ Add language</button>
      <p className="mt-4 text-gray-300 text-sm">
        Before copying this widget to a new page, select the displayed language of that page to assign it properly.
      </p>
    </div>
  );
};

export default LanguagePicker;
