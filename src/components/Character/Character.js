import React from 'react';
import NavbarResponsive from '../NavbarResponsive/NavbarResponsive';
import './Character.css';

const Character = ({getPeople}) => {
    const { name, birthYear, eyeColor, gender, hairColor, height, mass, skinColor, vehicleConnection} = getPeople;
    const vehicles = vehicleConnection.vehicles;
    return (
        <div>
            <NavbarResponsive name={name} backButton={true}/>
            <div className="container">
                <div className="container__general-information">
                    <h1 className="container__general-information--title">general information</h1>
                    <div>
                        <div className="container__general-information--characteristic">
                            <p className="characteristic-title">eye color</p>
                            <p className="characteristic">{ eyeColor }</p>
                        </div>
                        <div className="container__general-information--characteristic">
                            <p className="characteristic-title">hair color</p>
                            <p className="characteristic">{ hairColor }</p>
                        </div>
                        <div className="container__general-information--characteristic">
                            <p className="characteristic-title">skin color</p>
                            <p className="characteristic">{ skinColor }</p>
                        </div>
                        <div className="container__general-information--characteristic">
                            <p className="characteristic-title">birth year</p>
                            <p className="characteristic">{ birthYear  }</p>
                        </div>
                        <div className="container__general-information--characteristic">
                            <p className="characteristic-title">height</p>
                            <p className="characteristic">{ height  }</p>
                        </div>
                        <div className="container__general-information--characteristic">
                            <p className="characteristic-title">weight</p>
                            <p className="characteristic">{ mass  }</p>
                        </div>
                        <div className="container__general-information--characteristic">
                            <p className="characteristic-title">gender</p>
                            <p className="characteristic">{ gender }</p>
                        </div>
                    </div>
                </div>
                <div className="container__general-information">
                    {
                        vehicles.length > 0 &&     
                            <div>
                                <h1 className="container__general-information--title">vehicles & model</h1>
                                <div>
                                    {
                                        vehicles.map(({id, name, model}) => (
                                            <div key={id} className="container__general-information--characteristic">
                                                <p className="characteristic-title">{ name }</p>
                                                <p className="characteristic">{ model }</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Character;
