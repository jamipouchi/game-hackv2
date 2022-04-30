import React from 'react'
import './killer.css'
import QrContainer from "./QrContainer";
let opponent = ""

export default function Killer() {
    return (
        <div className='killer-general'>
            <div className="killer-container">
                <h1>Scan your QR to find a random opponent</h1>
            </div>
            <QrContainer/>

            <p>your opponent is {opponent === '' ? `...` : opponent}</p>
        </div>
    )
}