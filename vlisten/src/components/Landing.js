import React from 'react';
import '../css/landing.css';

export default function Landing() {
    return (
        <div className="container">
            <div className="text">
                <h5 id="p1">Welcome to listen Millions of songs</h5>
                <h5 id="p2">for free and enjoy hanging out with others</h5>
                <h5 id="p3">Also make memorable moments by attending live events</h5>
            </div>

            <div className="buttons">
                <button id="get_started" className="btn-outline-danger">Get Started</button>
                <button id="about" className="btn-outline-danger">Know About Us</button>
            </div>
        </div>
    )
}
