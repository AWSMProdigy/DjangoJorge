import React from 'react'
// import './App.css'
import { Button } from './Button'
// import './ListingSection.css';

function ListingSection() {
    return (
        <div className='listing-container'>
            {<video src={require("../videos/video-2.mp4").default} autoPlay loop muted/> }
            <h1>Let's Make the Move Together</h1>
            
            <div className="listing-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'  toLink='/About'>Why Go With Jorge?</Button>  
            </div>
        </div>
    )
}

export default ListingSection
