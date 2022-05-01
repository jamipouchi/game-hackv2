import Button from 'react-bootstrap/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './group.css'

export default function Group() {
    const navigate = useNavigate()
    return(
        <div className='group-container'>
            <div className='main-body'>
                <h3>Create or Join a room</h3>
                <p>
                    You can record and organize a group game, by creating
                    or joining an existing room. <br/>
                    If you want to be the creator, click the corresponding
                    button and scan your QR. If you want to join an existing
                    room, scan the creators QR, and you will automatically join.
                    <br/>
                    If any one of the participants has the "HackU virus", all
                    room participants will be infected.

                </p>
            </div>
            <div className='botons'>
                <Button variant="primary" size="lg" onClick={() => navigate('/create')}>Create room</Button>
                <Button variant="primary" size="lg" onClick={() => navigate('/join')}>Join Room</Button>
            </div>
        </div>
    )
}