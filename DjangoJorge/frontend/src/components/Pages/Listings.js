import React from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-maps-react';
import CardItem from '../CardItem';
export default class Listings extends React.Component{
   
    state = {
        listings:[],
    }
    componentDidMount() {

        let data;
    
        axios.get('http://localhost:8000/api/listing')
        .then(res => {
            data = res.data;
            this.setState({
                listings : data    
            });
        })
        .catch(err => {})
    };
    render(){
    return (
            <div className='featured'>
                <div className='header_search'>
                    <textarea style={{visibility: "hidden"}}>Search</textarea>
                    <h1>Featured Homes</h1>
                    <textarea>Search</textarea>
                </div>
                <div className='featuredHomes'>
                    <CardItem src={require("../../images/img-2.jpg").default} price="245,000" address="420 Pog Avenue" bed="3" bath="2" sqft="1400" text="Pop off my wayward son" label='poppin off' path='/services'/>  
                    <CardItem src={require("../../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                    <CardItem src={require("../../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                    <CardItem src={require("../../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                    <CardItem src={require("../../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                </div>
                <h1>Featured Land</h1>
                <div className='featuredHomes'>
                    <CardItem src={require("../../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                    <CardItem src={require("../../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                    <CardItem src={require("../../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                    <CardItem src={require("../../images/img-2.jpg").default} text="Pop off my wayward son" label='poppin off' path='/services'/>  
                </div>
        </div>
    )
    }
}