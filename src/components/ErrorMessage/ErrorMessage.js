import React from 'react';
import NavbarResponsive from '../NavbarResponsive/NavbarResponsive';
import './ErrorMessage.css'

const ErrorMessage = () => {
    return (
        <div>
            <NavbarResponsive name="people" />
            <div className="container">
                <h1 className="error">failed to load data</h1>
            </div>
        </div>
    )
}

export default ErrorMessage
