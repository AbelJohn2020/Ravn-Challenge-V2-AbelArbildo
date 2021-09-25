import React from 'react';
import AllPeople from '../AllPeople/AllPeople';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import NavbarResponsive from '../NavbarResponsive/NavbarResponsive';
import './GetAllPeople.css';

const GetAllPeople = ({loading, error, getPeople}) => {
    return (
        <div className="getAllPeople">
            {
                loading && 
                <div>
                    <NavbarResponsive name="people of star wars"/>
                    <Loading />
                </div>
            }
            {
                error && <ErrorMessage />
            }
            {
                getPeople && <AllPeople getPeople={getPeople} />
            }
        </div>
    )
}

export default GetAllPeople
