import { gql } from "@apollo/client";

export const LOAD_ALL_PEOPLE = gql`
    {
        allPeople {
        totalCount
        people {
            name
            birthYear
            eyeColor
            gender
            hairColor
            height
            mass
            skinColor
            vehicleConnection {
            totalCount
            vehicles {
                name
                model
                id
            }
            }
            created
            edited
            id
        }
        }
    }
`;