import React from 'react';
import NavbarResponsive from '../NavbarResponsive/NavbarResponsive';
import './Loading.css';

const Loading = () => {
    return (
        <div>
            <NavbarResponsive name="people of star wars"/>
            <div className="loading">
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1 className="title">loading</h1>
            </div>
        </div>
    )
}

export default Loading
