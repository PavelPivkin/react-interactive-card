import React from 'react'
import FlippingCard from "../components/flipping-card/FlippingCard";

class FlippingCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotated: false,
            isLoading: false,
            error: null,
        };
    }

    onClickHandler = () => {
        this.setState({rotated: !this.state.rotated});
    }

    onMouseEnter = () => {
        this.setState({rotated: true});
    }

    onMouseLeave = () => {
        this.setState({rotated: false})
    }

    componentDidMount() {

    }

    render() {
        return <FlippingCard
            onClick={this.onClickHandler}
            // onMouseEnter={this.onMouseEnter}
            //onMouseLeave={this.onMouseLeave}
            rotate={this.state.rotated}
            front={''}
            back={''}
        >

        </FlippingCard>;
    }
}

export default FlippingCardContainer