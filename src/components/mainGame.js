import React from 'react'
import Qr from "./Qr"
import QrContainer from "./QrContainer";
import ReactJson from 'react-json-view'
import {Button} from "react-bootstrap";
import JsonData from '../main.json'
import {writeFile} from "fs";


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

    function putjson() {
        setFirstQr(document.getElementById("first"));
        setSecondtQr(document.getElementById("second"));
        let state = {
            primer :myQr,
            segon :mySecondQr
        }
        console.log(state);
        writeFile('../main.json', JSON.stringify(state), (err) => {
            if (err) console.log('Error writing file:', err);
        })
    }
    return(
        <div class="QrContainer">
            <QrContainer id="qr+" title={"Enter your Qr code"}></QrContainer>
            <p id="first"></p>
            <p id="second"></p>
            <button onClick={putjson}>Finish</button>
        </div>
    )
}