import React from 'react'
import PropTypes from 'prop-types'

import './back.css'

const Back = ({className}) => {
    return (
        <div className={['back', className].join(' ')}>

        </div>
    )
}

Back.propTypes = {
    className: PropTypes.string
}

Back.defaultProps = {
    className: ''
}

export default Back