import './index.css';
import './builder-settings';
import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import '@builder.io/widgets';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />, rootElement
);
