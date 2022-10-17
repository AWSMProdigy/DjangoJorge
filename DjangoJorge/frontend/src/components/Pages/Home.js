import React from 'react';
// import '../App.css';
import Cards from '../Cards';
import {Button} from '../Button'


function Home(){
    return (
        <>
            <div className='listing-container'>
                <img src={require("../../images/Jorge.jpg").default} className="headshot"/>
                <h1>Let's Make the Move Together</h1>
                
                <div className="listing-btns">
                    <Button className='btns' buttonStyle='btn--cover'
                    buttonSize='btn--large'  toLink='/About'>Why Go With Jorge?</Button>  
                </div>
            </div>
            {/* <Cards/> */}
        </>
    );

}

export default Home;
