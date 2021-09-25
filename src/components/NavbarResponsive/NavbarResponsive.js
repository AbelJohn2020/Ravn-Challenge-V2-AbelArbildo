import React from 'react';
import '../UI/Navbar.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory } from 'react-router';

const NavbarResponsive = ({name, backButton}) => {
    const history = useHistory();
    const handleClick = () => {
        history.goBack();
    };

    return (
        <div className="navbarResponsive">
            <div className={ backButton ? "navbarResponsiveWithButton" : "Navbar" }>
                { 
                    backButton && 
                        <button className="btn" onClick={handleClick}>
                            <IoMdArrowRoundBack className="backIcon"/>
                        </button> 
                }
                <h1 className="Navbar__title">{name}</h1>
            </div>
        </div>
    )
}

export default NavbarResponsive
