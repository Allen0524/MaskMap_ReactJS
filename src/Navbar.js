import React, { Component } from 'react';
import './App.css'
import CityCountyData  from './data/CityCountyData.json';
import StoreList from './StoreList';

//使用者選好縣市地區後，從口罩資料去比對找出經緯度，因此需要先把口罩資料抓近來。

class Navbar extends Component {

    state = {
        cityName: '新北市',
        areaName: '淡水區',
        allData: [],
        centerStores: [],//使用者選擇區域的所有店家
    }

    getData = () => {
        return fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR0oowBRjj1goAMqtnugBiXMTMY8OCl14TGmgt3YDJi9w5BXs4VsfZQ9mDI')
          .then((res)=> {return res.json()})
          .then(data=> {return data.features} )
          .catch((error)=>console.error(error))
    }

    componentDidMount(){
        this.getData().then(data => this.setState({allData: data},()=>{this.setState({centerStores: this.getCenter()})}));
    }

    onCityChange = (e) => {
        this.setState({cityName: e.target.value})
    }

    onAreaChange = (e) => {
        this.setState({areaName: e.target.value}, () => {
            this.setState({centerStores: this.getCenter()}, ()=>{this.getLatLon()})
        });
    }

    getLatLon = () => {
        const newCenter = [];
        newCenter[0] = this.state.centerStores[0].geometry.coordinates[1];
        newCenter[1] = this.state.centerStores[0].geometry.coordinates[0];
        this.props.updateCenter(newCenter);
    }

    //取得附近的所有店家
    getCenter = () => {
        return this.state.allData.filter(store => {
            return store.properties.address.includes(this.state.cityName+this.state.areaName)})
    }

    render() {

    const citySelect = CityCountyData.map(city => <option key={city.CityName} value={city.CityName}>{city.CityName}</option>)
    const areaSelect = () => {
        const city = CityCountyData.filter(city => city.CityName == this.state.cityName)
         return city[0].AreaList.map(area => <option key={area.AreaName} value={area.AreaName}>{area.AreaName}</option>)
    }

        return (
            <div className="navbar">
                <div className="citySearch">
                    <select className="select-input" value={this.state.cityName} onChange={this.onCityChange}>
                        {citySelect}
                    </select>
                    <select className="select-input" value={this.state.areaName} onChange={this.onAreaChange}>
                        {areaSelect()}
                    </select>
                </div>
                <StoreList localStores={this.state.centerStores}/>

            </div>
        );
    }
}

export default Navbar;