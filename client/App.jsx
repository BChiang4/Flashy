import React from "react";
import Box from './Box.jsx';
import '../src/styles.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import Collections from '../src/pages/Collections.jsx'
import Layout from '../src/pages/Layout.jsx'



function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="Collections" element={<Collections/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default App;