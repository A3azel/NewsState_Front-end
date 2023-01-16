import React, { Component } from 'react';
import {GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api';

const API_KEY = 'AIzaSyAdJZFhi-nCVHxP9ngNjMYR7QIfUmjnn7Q';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 50.450001,
  lng: 30.523333
};

const onLoad = marker => {
  console.log('marker: ', marker)
};

class GoogleMapComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      position: {
  lat: 50.450001,
  lng: 30.523333
}
    }

    this.onMapClick = this.onMapClick.bind(this)
  }
    onMapClick(event){
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.setState({position: {lat,lng}});
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());  
  }

  render() {
    return (
      <LoadScript
        googleMapsApiKey='AIzaSyAdJZFhi-nCVHxP9ngNjMYR7QIfUmjnn7Q'
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
          onClick={this.onMapClick}
        >         
            <MarkerF
            onLoad={onLoad}
            position={this.state.position}
            />     
        </GoogleMap>
      </LoadScript>
    )
  }
}


export default GoogleMapComponent;