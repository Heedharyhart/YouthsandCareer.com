import React from 'react'
import './button.css';

const Buttons = ({children, ...otherProps}) =>{
    return(
        <button className="btn" {...otherProps}>
            {children}

        </button>
    )
}

export default Buttons;