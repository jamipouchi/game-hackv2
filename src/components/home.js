import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './home.css'

import knife from '../assets/knifeblood.jpg'
import snake from '../assets/427533.png'
import challenge from '../assets/1v1.png'


export default function Home(props) {
    return (
        <div className='container'>
            <h4 className='title'>Pick a game</h4>
            <Carousel variant='dark'>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={challenge}
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3><a className="nav-link" href="killer">Find a match!</a></h3>
                        <p>Get matched win an opponent</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={knife}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3><a className="nav-link" href="group">Participate!</a></h3>
                        <p>Join/Create a room</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={snake}
                        alt="Image Three"
                    />
                    <Carousel.Caption>
                        <h3><a className="nav-link" href="snake">Play!</a></h3>
                        <p>Classical snake game</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}