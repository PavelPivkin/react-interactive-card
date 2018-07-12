import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Example from "./Example";


ReactDOM.render(<Example/>, document.getElementById('root'));
registerServiceWorker();
