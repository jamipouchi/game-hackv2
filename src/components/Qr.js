import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import "../ranks.css"
import {Button} from "react-bootstrap";

const Qr = (props) => {
    const [data, setData] = useState('No result');

    let i=0;
    let response = ""
    function reset(){
        console.log(i);
        if(document.getElementById("first").innerHTML==="" && document.getElementById("qrCode").innerHTML!=='No result'){
            document.getElementById("first").innerHTML=document.getElementById("qrCode").innerHTML;
            setData('No result') ;
            i=1;
        }
        else {
            document.getElementById("second").innerHTML=document.getElementById("qrCode").innerHTML;;
            i=0;
        }
    }

    return (
        <div className="boxQr">
            <QrReader class="Qr"
                onResult={(result, error) => {
                    if (!!result) {
                        response = result?.text;
                        setData(result?.text);
                    }


                    if (!!error) {
                        console.info(error);
                    }


                }}
                style={{
                    display: 'flex',  justifyContent:'center', alignItems:'center', margin:'10 px'}}

            />
            <div className="qr-alignment">
                <p id="qrCode">{data}</p>
                <Button onClick={reset}>Scann Next</Button>
            </div>

        </div>
    );
};

export default Qr