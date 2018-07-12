import React from 'react'
import PropTypes from 'prop-types'

import './front.css'

const Front = ({className}) => {
    return (
        <div className={['front', className].join(' ')}>

        </div>
    )
}

Front.propTypes = {
    className: PropTypes.string
}

Front.defaultProps = {
    className: ''
}

export default Front