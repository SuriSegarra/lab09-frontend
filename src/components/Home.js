import React, { Component, createRef } from 'react'
import myImage from '../assets/weed-logo copy.png';
import { Link } from 'react-router-dom';

console.log(myImage);

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link className='weed-link' to='/list'>Products</Link>
                <h1>The Coughy Shop</h1>
             <img className='home-img' src={myImage}/>
             <p className='home-p'>The Coughy Shop</p>
            </div>
        );
    }
}
