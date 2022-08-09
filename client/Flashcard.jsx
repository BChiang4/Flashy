import React from "react";
import { useState } from "react";
import '../src/styles.scss'
const array = ['Transpile','Runtime',"Object Oriented Programming","CSS"];
function Flashcard(props){
    return(
        <div>
            <p>{props.currCard}</p>
        </div>
    )
}


export default Flashcard;