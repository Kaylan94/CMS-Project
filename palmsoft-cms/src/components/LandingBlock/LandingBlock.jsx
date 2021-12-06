import React from 'react';
import '../../index.css';
import logo from '../../logo.svg';

export const LandingHeader = (props) => {

    return(

        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>
                Hi there! Please login or register to continue.
            </h3>
            </header>
        </div>

    )
}