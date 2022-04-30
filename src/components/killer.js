import React from 'react'
import './killer.css'
import QrContainer from "./QrContainer";
import Button from "react-bootstrap/Button";


class Killer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            nom:""
        };
    }
    render() {
        return (
            <div className='killer-general'>
                <div className="killer-container">
                    <h1>Scan your QR to find a random opponent</h1>
                </div>
                <QrContainer/>
                <div  className="killer-button">
                    <Button variant="primary" onClick={() => this.setState({nom:"Pol"})}>Find opponent </Button>
                </div>
                <p>your opponent is   {this.state.nom}</p>

            </div>
        )
    }

}
export default Killer

