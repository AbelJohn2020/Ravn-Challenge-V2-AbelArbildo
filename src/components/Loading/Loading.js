import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
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
    )
}

export default Loading
