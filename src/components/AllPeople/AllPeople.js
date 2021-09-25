import React from 'react';
import './AllPeople.css';
import { AiOutlineRight } from "react-icons/ai"
import { Link } from 'react-router-dom';
import NavbarResponsive from '../NavbarResponsive/NavbarResponsive';

const AllPeople = ({getPeople}) => {
    return (
        <div>
            <NavbarResponsive name="people of star wars"/>
            <div className="container--people">
                {
                    getPeople.map(({ id, name, species, homeworld}) => (
                        <Link to={`/${name}`} className="box-link" key={id}>
                            <div className = "box" key={id}>
                                <div className="box__person">
                                    <h1 className="box__person--name">{ name }</h1>
                                    <p className="box__person--planet">
                                        {species ? `${ species.name }` : 'Human'} from { homeworld.name }
                                    </p>
                                </div>
                                <AiOutlineRight />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default AllPeople
