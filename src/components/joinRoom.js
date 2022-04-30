import React from 'react'
import QrContainer from "./QrContainer";
import Button from "react-bootstrap/Button";
import './createRoom.css'
import {useNavigate} from "react-router-dom";

class JoinRoom extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            text:""
        };
    }
    render(){
        return(
            <div className="createRoom-container">
                <div>
                    <h3>Scan your QR to create a room</h3>
                </div>
                <QrContainer/>
                <div>
                    <div  className="killer-button">
                        <Button variant="primary" onClick={() => this.setState({text:"you've joined the room"})}>Join Room </Button>
                    </div>
                    <p>{this.state.text}</p>
                </div>
            </div>
        )}
}
export default JoinRoom
