import React, { Component } from 'react'
import myImage from '../assets/logo1.png';
import { Link } from 'react-router-dom';

console.log(myImage);

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link className='weed-link' to='/list'>Products</Link>
                <h1>The Coughy Shop</h1>
             <img className='home-img' src={myImage} alt=''/>
            
            </div>
        );
    }
}
