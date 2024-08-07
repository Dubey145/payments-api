import React from 'react'

const Button = (props) => {
  return (
    <div className = "inline relative group">
      <div className="absolute bg-black w-full h-full transition-all duration-300 group-hover:left-1 group-hover:top-1 left-[2px] top-[2px]"></div>
        <button className = "relative p-2 border-2 transition-colors duration-300 border-black hover:bg-yellow bg-purple hover:text-black text-white font-inter">{props.text}</button>
    </div>
    
  )
}

export default Button