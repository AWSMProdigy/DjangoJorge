import React from 'react';
// import '../App.css';
import Featured from '../Featured';
import {Button} from '../Button'


function Home(){
    return (
        <div className='parallax'>
            <div className='listing-container'>
                <img src={require("../../images/Jorge.jpg").default} className="headshot"/>                
                <div className="listing-btns">
                    <Button className='btns' buttonStyle='btn--cover'
                    buttonSize='btn--large'  toLink='/About'>Why Go With Jorge?</Button>  
                </div>
            </div>
            <Featured></Featured>
        </div>
    );

}

export default Home;
