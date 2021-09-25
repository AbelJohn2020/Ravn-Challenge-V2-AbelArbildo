import React from 'react';
import './AllPeople.css';
import { AiOutlineRight } from "react-icons/ai"

const AllPeople = ({getPeople}) => {
    return (
        <div>
            {
                getPeople.map(({ id, name, species, homeworld}) => (
                    <div className = "box" key={id}>
                        <div className="box__person">
                            <h1 className="box__person--name">{ name }</h1>
                            <p className="box__person--planet">
                                {species ? `${ species.name }` : 'Human'} from { homeworld.name }
                            </p>
                        </div>
                        <AiOutlineRight />
                    </div>
                ))
            }
        </div>
    )
}

export default AllPeople
