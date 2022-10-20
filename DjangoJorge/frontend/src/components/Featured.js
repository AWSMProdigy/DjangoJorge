import React from 'react';
import CardItem from "./CardItem";


function Featured(){
    return (
        <div className='featured'>
            <h1>Featured Homes</h1>
            <div className='featuredHomes'>
                <div className='featuredRow'>
                    <CardItem src={require("../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                    <CardItem src={require("../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                </div>
                <div className='featuredRow'>
                    <CardItem src={require("../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                    <CardItem src={require("../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                </div>  
            </div>
            <h1>Featured Land</h1>
            <div className='featuredHomes'>
                <CardItem src={require("../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                <CardItem src={require("../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                <CardItem src={require("../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                <CardItem src={require("../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
            </div>
        </div>
    );

}

export default Featured;
