import React from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-maps-react';
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
        <div className="loc-container">
            {this.state.listings.map((listing, id) =>  (
            <div key={id} className="loc">
                  <div className="loc">
                        <h1>{listing.Address}</h1>
                        <h2>{listing.City}, {listing.State}</h2>
                         <h3>${listing.Price}</h3>
                  </div>
            </div>
            )
        )}
      </div>
    )
    }
}