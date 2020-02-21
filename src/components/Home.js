import React, { Component, createRef } from 'react'
import myImage from '../assets/weed-logo copy.png';
console.log(myImage);

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>The Coughy Shop</h1>
             <img src={myImage}/>
             <p>The Coughy Shop</p>
            </div>
        );
    }
}
