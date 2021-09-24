import { useQuery } from '@apollo/client'
import React from 'react'
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
            
        </div>
    )
}

export default GetAllPeople
