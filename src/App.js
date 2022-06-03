import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Haqqında from "./components/Haqqında";
import Ish from './components/ish';
import Contact from "./components/contact";
import Contactid from "./components/contactid"
import Nav from "./nav"
import "./style.css";

export default function App(){

    return (
        <div>
            <Nav />
            <Routes>
                <Route path ='/' element={<Haqqında />}></Route>
                <Route path = "/ish" element={<Ish />}></Route>
                <Route path = "/contact" element = {<Contact />}></Route>
                <Route path = "/contact:id" element = {<Contactid />}></Route>
            </Routes>
        </div>
        
    )
}