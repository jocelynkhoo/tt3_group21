import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'


const SIZES = ['btn--medium', 'btn--large']
const STYLES = ['btn--primary', 'btn--outline']


 export const Button =({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
    }) => {
        
    const checkButtonStyle = STYLES.includes(buttonStyle) ? 
    buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ?
    buttonSize: SIZES[0]

    return(
       
            <button className={`btn ${checkButtonStyle} ${checkButtonStyle}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
       
        
    )
}



