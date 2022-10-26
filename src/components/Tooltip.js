import React, { useState } from "react";


export default function Tooltip(){

    const [isHover , setIsHover]= useState(false)
    function isOver(){
        setIsHover(prevState => !prevState)
        console.log(position)
    }
    const [position ,setPosition]= useState('right')


    function handleChange(e){
        setPosition(e.target.value)
    }

    return(
        <div className="tooltip-container">
            <select onChange={handleChange}>
                <option value="right">right</option>
                <option value="left">left</option>
                <option value="top">top</option>
                <option value="bottom">bottom</option>
            </select>

            <div className="text-container">
                <button  onMouseEnter={isOver} onMouseLeave={isOver} className="hover-btn">Hover Me</button>
                
                    <span className={isHover ? `tooltip-${position}` : 'display-none'}>yes! hoverd me</span>
                
            </div>


        </div>
    )

}