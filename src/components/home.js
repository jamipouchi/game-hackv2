import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './home.css'

import cup from '../assets/cup.png'
import snake from '../assets/427533.png'
import killer from '../assets/7-512.webp'


export default function Home(props) {
    return (
        <div className='container'>
            <h4 className='title'>Available games</h4>
            <Carousel variant='dark'>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={cup}
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3><a className="nav-link" href="ranking">Participate!</a></h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={snake}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={killer}
                        alt="Image Three"
                    />
                    <Carousel.Caption>
                        <h3>Label for third slide</h3>
                        <p>Sample Text for Image Three</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}