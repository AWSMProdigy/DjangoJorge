import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.address}>
                        <img src={props.src} alt="Travel Image" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h2 className="cards__item__text">${props.price}</h2>
                        <h5 className="cards__item__text"><span className='cardSpan'>{props.bed}</span> bed  <span className='cardSpan'>{props.bath}</span> bath  <span className='cardSpan'>{props.sqft}</span> sqft</h5>
                    </div>
                </Link> 
            </li>
        </>
    )
}

export default CardItem;
