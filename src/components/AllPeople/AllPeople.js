import React from 'react'

const AllPeople = ({getPeople}) => {
    return (
        <div>
            {
                getPeople.map(({ id, name, species, homeworld}) => (
                    <div className = "person" key={id}>
                        <h1>{ name }</h1>
                        <p>
                            {species ? `${ species.name }` : 'Human'} from { homeworld.name }
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default AllPeople
