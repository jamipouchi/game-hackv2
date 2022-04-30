import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './mainGame.css'

export default function MainGame() {
    const navigate = useNavigate()
    return (
        <div className="main-container d-grid gap-2">
            <body className='main-body'>
                <h3>Rules</h3>
                <p>
                    There have been some lucky hackers who have been selected to
                    carry the "nomvirus". Every time they make a new connection,
                    the "nomvirus" is transmitted. <br/>
                    At the end of the Hackathon, you will see how the "nomvirus"
                    has expanded in a graph-like display and you can even check your
                    Erdös number with other participants. <br/>
                    Connections can be made by finding a random opponent, participating
                    or creating a room (which makes all possible connections) or simply
                    by clicking Scan.
                </p>
            </body>
            <Button variant="primary" size="lg" onClick={() => navigate('/scan')}>
                Scan
            </Button>
        </div>
    )
}