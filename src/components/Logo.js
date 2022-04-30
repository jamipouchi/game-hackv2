import React from 'react'
import logo from  '../assets/logo.PNG'
import './logo.css'
export default function Logo() {
    return(
        <div className="logo-container">
            <img src={logo}/>
        </div>
    )
}
