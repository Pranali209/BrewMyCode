
import React from 'react'
import { useTranslation } from 'react-i18next'

function LangDetector({showlangPicker , setLangPicker}) {
    const { i18n } = useTranslation()
    const languges = [
        { code: "en", Lang: "English" },
        { code: "fi", Lang: "Finnish" },
        { code: "sp", Lang: "Spanish" }

    ]

    function changeLanguage(lang) {
        console.log(lang);
        i18n.changeLanguage(lang)
    }
    return (
        <div className="bg-white  shadow-lg rounded-lg p-4 w-64 absolute top-1 right-1 max-md:z-50 max-md:w-48">

            <div className="flex justify-between items-center mb-2">
                <p className="font-medium">Languages</p>
                <span className="material-symbols-outlined cursor-pointer"
                    onClick={setLangPicker}> {showlangPicker ? "❌" : ""}</span>
            </div>
            <div className=" rounded-lg">
          
                {languges.map((lang) => (
                    <div className="p-2 hover:bg-gray-100 cursor-pointer border border-gray-300 mt-4 rounded-md">
                    <p className=' inline-block  rounded-md ' onClick={()=>changeLanguage(lang.Lang)}>{lang.Lang}</p>
                  </div>
                ))}
           
        </div>
        </div>
           


    )
}

export default LangDetector