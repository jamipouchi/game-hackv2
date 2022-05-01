import React from 'react'
import QrContainer from "./QrContainer";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";


export default function MainGame() {

    let myQr;
    let mySecondQr;
    var file = 'main.json'
    const navigate = useNavigate()

    function setFirstQr(value){
        myQr = value;
    }
    function setSecondtQr(value){
        mySecondQr = value;
    }


    return(
        <div className="QrContainer">
            <QrContainer id="qr+" title={"Enter your Qr code"}></QrContainer>
            <p id="first"></p>
            <p id="second"></p>
            <Button ariant="primary" onClick={() => navigate('/home')}>Finish </Button>
        </div>
    )
}