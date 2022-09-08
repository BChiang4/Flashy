import React, { useState, useEffect } from 'react';

function Collections(){
    const [list, setList] = useState([]);
    const [add,setAdd] = useState(false);

    useEffect(()=>{
        console.log('useEffect');
        // when the collections component is mounted onto the DOM 
            // send a fetch request to the server to query all collections inside the Collections table 
            fetch('/collections/readCollections')
            .then(data => data.json())
            .then((response)=>{
                setList(response)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    
    
    /* functionality that handles adding to the collection*/
    const handleClickForm = ()=>{
        setAdd(!add);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        // fetch request to back end
        const data = {collectionName : e.target.collectionName.value}
            
        fetch('/collections/updateCollections',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(data)
           })
           .then(data => data.json())
        //    .then((response)=>{
        //     setList(response);
        //    })
           .catch((err)=>{
                console.log(err)
           })
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
                        <label htmlFor='collectionName'>Collection Name</label>
                        <input type='text' name='collectionName' id='name' required/>
                        <input type='submit' value='ADD!'/>
                    </form>        
                ) : (
                    null
                )
            }
            <ul>
                {list.map((list,index)=>{
                    return <li key={index}><a href=''>{list.name}</a><button>X</button></li>
                })
                }
            </ul>
        </>  
    )
}

export default Collections;