import React from "react";
import { useState } from "react";
import '../src/styles.scss'
const array = ['Transpile','Runtime',"Object Oriented Programming","CSS"];
function Flashcard(){
    const [currCard, setCard] = useState(array[0]);

    const handleClickLeft = ()=>{
        // shuffle to another card within our json data and re render the new card onto the screen 
        // if the current card is the first card on the deck, move to the last card of the deck
        if(array.indexOf(currCard) === 0){
            setCard(array[array.length-1]);
        }
        setCard(array[array.indexOf(currCard) - 1])
    }
    
    const handleClickRight = ()=>{
        setCard(array[array.indexOf(currCard) + 1])
    }
    return(
        <div>
            <p>{currCard}</p>
            <div className='Button'>
                <button className="left_btn" onClick={handleClickLeft}>left</button>
                <button className='right_btn' onClick={handleClickRight}>right</button> 
            </div>
        </div>
    )
}


export default Flashcard;