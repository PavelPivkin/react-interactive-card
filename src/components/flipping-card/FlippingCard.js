import React from 'react'
import PropTypes from 'prop-types'

import './flipping-card.css'

const FlippingCard = ({className, direction, onMouseEnter, onMouseLeave, onClick, rotate, front, back}) => {
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={['flipping-card', className].join(' ')}>
            <div onClick={onClick}  className={['flipping-card__inner ',
                rotate && 'flipping-card__inner_dir_' + direction].join(' ')}>
                <div className={'flipping-card__face flipping-card__face_front'}></div>
                <div className={'flipping-card__face flipping-card__face_back'} />
            </div>
        </div>
    )
}

FlippingCard.propTypes = {
    className: PropTypes.string,
    rotate: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    direction: PropTypes.string,
    onClick: PropTypes.func,
    front: PropTypes.object,
    back: PropTypes.object
}

FlippingCard.defaultProps = {
    className: '',
    onHover: true,
    direction: 'left',
    rotate: false
}

export default FlippingCard