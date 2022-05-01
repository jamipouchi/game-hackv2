import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <a href='./theEnd'>Go to Graph</a>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
    }
};

export default function CountdownComp(){
    return(
        <Countdown
            date={Date.now() + 20000}
            renderer={renderer}
        />
    )
}