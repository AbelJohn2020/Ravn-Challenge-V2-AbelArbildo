import React, { useState } from 'react';
import './AllPeople.css';
import { AiOutlineRight } from "react-icons/ai"
import { Link } from 'react-router-dom';
import NavbarResponsive from '../NavbarResponsive/NavbarResponsive';
import Loading from '../Loading/Loading';

const AllPeople = ({getPeople}) => {
    const [getData, setGetData] = useState(0);
    
    const countUp = () => {
        if (getData <= getPeople.length -1) {
            setTimeout(() => {
                setGetData(getData+5)
            }, 1500);
        }
    }
    countUp();

    const loadDataFiveByFive = () => {
        return getPeople.slice(0, getData);
    }

    const loadData = loadDataFiveByFive();

    return (
        <div>
            <NavbarResponsive name="people of star wars"/>
            <div className="container--people">
                {
                    loadData.map(({ id, name, species, homeworld}) => (
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
            {
                ((getPeople.length - 1) > getData) && <Loading />
            }
        </div>
    )
}

export default AllPeople
