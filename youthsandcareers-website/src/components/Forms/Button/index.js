import React from 'react'
import './style.css';

const Buttons = ({children, ...otherProps}) =>{
    return(
        <button className="btn" {...otherProps}>
            {children}

        </button>
    )
}

export default Buttons;