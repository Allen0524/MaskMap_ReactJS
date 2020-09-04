import React, { Component } from 'react';
import L from 'leaflet';
import './App.css';
import Navbar from './Navbar';
import 'leaflet.markercluster';


class App extends Component {

  state = {
    center:[
      25.171712,
      121.44587,
    ],
  }

  getData = () => {
    return fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR0oowBRjj1goAMqtnugBiXMTMY8OCl14TGmgt3YDJi9w5BXs4VsfZQ9mDI')
      .then((res)=> {return res.json()})
      .then(data=> {return data.features})
      .catch((error)=>console.error(error))
  }

  componentDidMount(){
    this.map = L.map("mapid", {
      center: [this.state.center[0], this.state.center[1]],
      zoom:16,
    });
    const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    L.tileLayer(osmUrl, {attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map);

    

    const currentMapData = () => this.getData().then(data => {
      const markers = L.markerClusterGroup({
        spiderfyOnMaxZoom: true,
        showCoverageOnHover:true,
        zoomToBoundsOnClick: true,
        iconCreateFunction:function(cluster){
          return L.divIcon({html: `<div class="custom-cluster">${cluster.getChildCount()}</div>`});
        }}).addTo(this.map);
      for(let i = 0; i < (data.length); i++){
        let lat = data[i].geometry.coordinates[1];
        let lon = data[i].geometry.coordinates[0];
        let adult = data[i].properties.mask_adult;
        let child = data[i].properties.mask_child;

        markers.addLayer(L.marker([lat, lon])
          .bindPopup(
            `<div>
              <h3>${data[i].properties.name}</h3>
              <div>${data[i].properties.address}</div>
              <div>${data[i].properties.phone}</div>
              <h5>大人: ${adult}<span class="child-span">小孩: ${child}</span></h5>
            </div>`
          ));
      }
      this.map.addLayer(markers);
    });

    currentMapData();

  }

  componentDidUpdate(prevState){
    if(prevState.center != this.state.center){
      this.map.panTo(this.state.center)
    }
  }

  updateCenter = (newCenter) => {
    this.setState({center: newCenter})
  }
  

  render() {
    return (
      <div className="container">
        <Navbar updateCenter={this.updateCenter} />
        <div id='mapid'></div>
      </div>
    );
  }
}

export default App;