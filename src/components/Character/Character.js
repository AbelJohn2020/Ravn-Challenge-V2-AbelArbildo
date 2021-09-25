import React from 'react'

const Character = ({getPeople}) => {
    return (
        <div>
            {
                getPeople.map(({id , birthYear, eyeColor, gender, hairColor, height, mass, skinColor, vehicleConnection}) => (
                    <div key={id}>
                        <div>
                            <h1>general information</h1>
                            <div>
                                <div>
                                    <p>eye color</p>
                                    <p>{ eyeColor }</p>
                                </div>
                                <div>
                                    <p>hair color</p>
                                    <p>{ hairColor }</p>
                                </div>
                                <div>
                                    <p>skin color</p>
                                    <p>{ skinColor }</p>
                                </div>
                                <div>
                                    <p>birth year</p>
                                    <p>{ birthYear  }</p>
                                </div>
                                <div>
                                    <p>height</p>
                                    <p>{ height  }</p>
                                </div>
                                <div>
                                    <p>weight</p>
                                    <p>{ mass  }</p>
                                </div>
                                <div>
                                    <p>gender</p>
                                    <p>{ gender === 'n/a' ? "NA" : `${gender}` }</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>vehicles</h1>
                            <div>
                                {
                                    vehicleConnection.map(({id, name, model}) => (
                                        <div key={id}>
                                            <p>{ name }</p>
                                            <p>{ model }</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Character;
