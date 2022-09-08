import React, { useState, useEffect } from 'react';

function Collections(){
    const [list, setList] = useState([]);
    const [add,setAdd] = useState(false);

    useEffect(()=>{
        // when the collections component is mounted onto the DOM 
            // send a fetch request to the server to query all collections inside the Collections table 

            // after the response is send back from the server, parse the response with json 
                // update state with the response 
    },[list])
    
    /* functionality that handles adding to the collection*/
    const handleClickForm = ()=>{
        setAdd(!add);
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        // fetch request to back end
           const response = await fetch('/collections/updateCollections',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    'word': e.target.word.value,
                    'definition': e.target.definition.value
                })
           })

           const updatedResponse = await response.json();
           setList(updatedResponse);
    }
    
    return(
        <>
            <div className='btn-collections'>
            <button className='btn-collections-add' onClick={handleClickForm}>Add Deck</button>
            <button className='btn-collections-delete'>Delete Deck</button>  
            </div>
            {
                add ? (
                
                      <form onSubmit={onSubmit}>
                        <label for='word'>Enter Word</label>
                        <input type='text' name='word' id='name' required/>
                        <label for='definition'>Enter Definition</label>
                        <input type='text' name='definition' id='definition' required/>
                        <input type='submit' value='ADD!'/>
                    </form>        
                ) : (
                    null
                )
            }
            <ul>

            </ul>
        </>  
    )
}

export default Collections;