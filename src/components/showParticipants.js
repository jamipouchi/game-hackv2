import React from "react";
import {Button} from "react-bootstrap";
import './showParticipants.css'
import {useNavigate} from "react-router-dom";

export default function ShowParticipants(){
    const navigate = useNavigate()
   return(
       <div>
               <h3>Paticipants</h3>
              <div className="wrapDePollo">
                  <p>Pau</p>
                   <p>Marta</p>
                   <p>Maria</p>
                   <p>Gerard</p>
                   <p>Uli</p>
                   <p>Nadia</p>
                   <p>Robert</p>
                   <p>Joan</p>
                   <p>Mar</p>
               </div>
                <div className="particpant-button">
                    <Button variant="primary" onClick={() => navigate('/home')}>Start Game </Button>
                </div>
       </div>

   )
}