import React from "react";
import '../src/styles.scss'


function Nav(){
    return(
        <div className='Nav'>
            <a className="userIcon"href="#">USER</a>
            <a href="#">COLLECTION</a>
            <a href="#">Home</a>
        </div>
    )
}

export default Nav;