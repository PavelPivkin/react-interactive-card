import React, { Component } from 'react';
import FlippingCardContainer from "./containers/flipping-card/FlippingCard";
import Front from "./components/front/Front";
import Back from "./components/back/Back";

class Example extends Component {
  render() {
    return (
        <FlippingCardContainer front={<Front/>} back={<Back/>}/>
    );
  }
}

export default Example;
