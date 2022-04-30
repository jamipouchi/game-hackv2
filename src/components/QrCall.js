import React from 'react'
import QrContainer from "./QrContainer";


export default function MainGame() {

    let myQr;
    let mySecondQr;
    var file = 'main.json'

    function setFirstQr(value){
        myQr = value;
    }
    function setSecondtQr(value){
        mySecondQr = value;
    }


    return(
        <div class="QrContainer">
            <QrContainer id="qr+" title={"Enter your Qr code"}></QrContainer>
            <p id="first"></p>
            <p id="second"></p>
            <button >Finish</button>
        </div>
    )
}