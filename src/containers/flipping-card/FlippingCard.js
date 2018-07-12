import React from 'react'
import FlippingCard from "../../components/flipping-card/FlippingCard";
import PropTypes from 'prop-types';

class FlippingCardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotated: false
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
            className={this.props.className}
            onClick={this.onClickHandler}
            // onMouseEnter={this.onMouseEnter}
            //onMouseLeave={this.onMouseLeave}
            rotate={this.state.rotated}
            front={this.props.front}
            back={this.props.back}
        >

        </FlippingCard>;
    }
}

FlippingCardContainer.propTypes = {
    front: PropTypes.object,
    back: PropTypes.object,
    className: PropTypes.string
}

export default FlippingCardContainer