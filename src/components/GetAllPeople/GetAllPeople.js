import React from 'react';
import AllPeople from '../AllPeople/AllPeople';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';

const GetAllPeople = ({loading, error, getPeople}) => {
    return (
        <div>
            {
                loading && <Loading />
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
