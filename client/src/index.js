import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import data from './data/data.js';

ReactDOM.render(<App movies={data}/>, document.getElementById('app'));