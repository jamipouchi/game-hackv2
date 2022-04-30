import React from 'react'
import './killer.css'

let opponent = ""

export default function Killer() {
    return (
        <div className='killer-general'>
            <div className="killer-container">
                <h1>Scan your QR to find a random opponent</h1>
            </div>
            <div className='camera-scan'>
                <h3>Aqui va el scanner</h3>
            </div>
            <p>your opponent is {opponent === '' ? `...` : opponent}</p>
        </div>
    )
}