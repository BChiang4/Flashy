import React, {useState} from "react";
import forwardArrow from '../assets/icons8-forward-100.png';
import backArrow from '../assets/icons8-back-100.png';
import flipArrow from '../assets/icons8-rotate-100.png'
import '../src/styles.scss'
import Flashcard from "./Flashcard.jsx";
import PopUp from './PopupGui.jsx'

function Box(){
    const mockData = ['OOP','Callbacks','Recursion','Closure','Data Patterns','Semantic HTML','SASS'];
 
    // move the state of the flashcard to the upmost parent component
    const [card,setCard] = useState(mockData[0]);


    const handleClickLeft = ()=>{
        // if you are currently at the card on the top of the stack, then go to the 
        // card at the end of the stack 
        if(mockData.indexOf(card) === 0){
            setCard(mockData[mockData.length-1])
        // else decrement the index of the stack 
        }else{
            setCard(mockData[mockData.indexOf(card) - 1]);
        }
    }

    const handleClickRight = ()=>{
        // implement the opposite logic for left click to the right click 
        if(mockData.indexOf(card) === mockData.length-1){
            setCard(mockData[0]);
        }else{
           setCard(mockData[mockData.indexOf(card) + 1]) 
        }
    }

    const handleFlip = ()=>{
        console.log('flipping');
    }
    return(
        <div className='Box'>
            <div className='addCard'>
                <button>Add Card</button>
            </div>
            <div className='deleteCard'>
                <button>Delete Card</button>
            </div>
            <div className='Flashcard'>
              <Flashcard currCard={card}/>  
            </div>
            <div className='Button'>
                <button className="arrow" onClick={handleClickLeft}>
                    <img src={backArrow} aria-hidden="true"></img>
                </button>
                <button className='flipArrow' onClick={handleFlip}>
                    <img src={flipArrow} aria-hidden='true'/>
                </button>
                <button className='arrow' onClick={handleClickRight}>
                    <img src={forwardArrow} aria-hidden="true"></img>
                </button>
            </div>
        </div>
    )
}



export default Box;