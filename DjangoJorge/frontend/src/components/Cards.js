import React from 'react'
import CardItem from './CardItem'
// import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC lands!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={require("../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>
                        <CardItem src={require("../images/img-1.jpg").default} text="Cool pic bro" label='poppin off' path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
