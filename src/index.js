import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import FlippingCardContainer from "./containers/FlippingCard";

ReactDOM.render(<FlippingCardContainer />, document.getElementById('root'));
registerServiceWorker();
