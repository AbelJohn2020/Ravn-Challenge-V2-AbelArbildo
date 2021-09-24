import { useQuery } from '@apollo/client'
import React from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import { LOAD_ALL_PEOPLE } from '../utils/queries'

const GetAllPeople = () => {
    const { loading, error, data } = useQuery(LOAD_ALL_PEOPLE);
    
    const getData = () => {
        if(data) {
            const people = data.allPeople.people;
            return people;
        } else {
            return data;
        }
    }

    const getPeople = getData();
    console.log(getPeople);

    return (
        <div>
            {
                loading && <Loading />
            }
            {
                error && <ErrorMessage />
            }
        </div>
    )
}

export default GetAllPeople
