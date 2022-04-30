import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Qr from "./Qr"
export default function ChessGame() {
    const [data, setData] = useState('');

    const parentToChild = () => {
        setData("This is data from Parent Component to the Child Component.");
    }
    return(
        <div>
            <h1>CHESS GAME</h1>
            <p>Welcome to new chess game plese enter you're Qr code</p>
            <div className="mb-2">
                <Button onClick={() => Qr} variant="primary" size="lg">
                   Scan QR CODE
                </Button>
            </div>

        </div>
    )
}