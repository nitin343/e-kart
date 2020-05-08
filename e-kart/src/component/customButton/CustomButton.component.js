import React from 'react'
import './CustomButton.style.scss';


const CButton =({
    children , ...otherProps
}) => (
<button className='custom-button' {...otherProps}>{children}</button>
)

export default  CButton;