import React from "react"
import QrContainer from "./QrContainer";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import './createRoom.css'

export default function CreateRoom(){

    const navigate = useNavigate()
    return(
        <div className="createRoom-container">
            <div>
                <h1>Scan your QR to create a room</h1>
            </div>
            <QrContainer/>
            <div>
                <Button variant="primary"  onClick={() => navigate('/showParticipants')}> Show participants </Button>
            </div>
        </div>
    )
}