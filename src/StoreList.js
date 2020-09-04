import React, { Component } from 'react';
import './App.css';

class StoreList extends Component {
    render() {
        return (
            <div className="all-store-list">
                {this.props.localStores.map(store => 
                <div className="store-div">    
                    <h3 style={{marginBottom:"3px"}}>{store.properties.name}</h3>
                    <div style={{display:"flex",marginTop:"5px"}}>
                        <h5 className="list-adultChild">大人: {store.properties.mask_adult}</h5>
                        <h5 className="list-adultChild">小孩: {store.properties.mask_child}</h5>
                    </div>
                </div>    
                    )}
            </div>
        );
    }
}

export default StoreList;