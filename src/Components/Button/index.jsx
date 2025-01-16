import React from 'react'

function Button({className ,txt ,onClick}) {
  return (
   <button  className= {`${className} rounded-3xl text-lg px-8 py-3 p-2 mx-auto hover:scale-75 cursor-pointer
                shadow-md transition-all`} onClick={onClick}>
 {txt}
   </button>
  )
}

export default Button