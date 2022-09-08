import React, {useEffect, useState} from "react";
import forwardArrow from '../assets/icons8-forward-100.png';
import backArrow from '../assets/icons8-back-100.png';
import flipArrow from '../assets/icons8-rotate-100.png'
import '../src/styles.scss'
import Flashcard from "./Flashcard.jsx";
import PopUp from './PopupGui.jsx'

function Box(){
    // move the state of the flashcard to the upmost parent component
    const [card,setCard] = useState('');
    const [deck,setDeck] = useState([]);

    // useEffect(()=>{
    //     (async ()=>{
    //         try{
    //             const response = await fetch('http://localhost:3000/deck')
    //             const cardDeck = await response.json();
    //             setDeck(cardDeck);
    //             // setCard(deck[0].key)
    //         }catch(err){
    //             console.log('Err occured when fetching card deck');
    //         }
    //     })();
    // },[]);


    // console.log(deck[0].key);
    console.log(deck[0]);
    const handleClickLeft = ()=>{
        // if you are currently at the card on the top of the stack, then go to the 
        // card at the end of the stack 
        if(deck.indexOf(card) === 0){
            setCard(deck[deck.length-1])
        // else decrement the index of the stack 
        }else{
            setCard(deck[deck.indexOf(card) - 1]);
        }
    }

    const handleClickRight = ()=>{
        // implement the opposite logic for left click to the right click 
        if(deck.indexOf(card) === deck.length-1){
            setCard(deck[0]);
        }else{
           setCard(deck[deck.indexOf(card) + 1]) 
        }
    }

    const handleFlip = ()=>{
        console.log('flipping');
    }

    // const handleAdd = async()=>{
    //     const response = await fetch('http://localhost:8080/flashcard',{
    //         method: 
    //     })
    // }


    return(
        <div className='Box'>
            <div className='addCard'>
                <button>Add Card</button>
            </div>
            <div className='deleteCard'>
                <button>Delete Card</button>
            </div>
            {/* <PopUp trigger={false}>My Popup</PopUp> */}
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