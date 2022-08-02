import React from "react";
import forwardArrow from '../assets/icons8-forward-100.png';
import backArrow from '../assets/icons8-back-100.png';
import flipArrow from '../assets/icons8-rotate-100.png'
import '../src/styles.scss'
import Flashcard from "./Flashcard.jsx";

function Box(){
    // move the state of the flashcard to the upmost parent component
    const handleClick = ()=>{
        console.log('clicking');
    }
    return(
        <div className='Box'>
            <div className='Flashcard'>
              <Flashcard/>  
            </div>
            <div className='Button'>
                <button className="arrow" onClick={handleClick}>
                    <img src={backArrow} aria-hidden="true"></img>
                </button>
                <button className='flipArrow' onClick={handleClick}>
                    <img src={flipArrow} aria-hidden='true'/>
                </button>
                <button className='arrow' onClick={handleClick}>
                    <img src={forwardArrow} aria-hidden="true"></img>
                </button>
            </div>
        </div>
    )
}



export default Box;