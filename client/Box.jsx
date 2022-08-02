import React from "react";
import forwardArrow from '../assets/icons8-forward-100.png';
import backArrow from '../assets/icons8-back-100.png';
import '../src/styles.scss'
import Flashcard from "./Flashcard.jsx";

function Box(){
    // const handleClick = ()=>{
    //     console.log('clicking');
    // }
    return(
        <div className='Box'>
            {/* <button className="arrow" onClick={handleClick}>
                <img src={backArrow} aria-hidden="true"></img>
            </button>
            <button className='arrow' onClick={handleClick}>
                <img src={forwardArrow} aria-hidden="true"></img>
            </button> */}
            <div className='Flashcard'>
              <Flashcard/>  
            </div>
        </div>
    )
}



export default Box;