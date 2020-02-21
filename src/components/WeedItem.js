import React, { Component } from 'react'

export default class weedItem extends Component {
    render() {
        const { weed } = this.props;
        return (
            <li className='weed-item'> 
                <h2 className='strain'> {weed.strain}</h2>
                <img src={weed.imgurl} alt=''/>
                <p> Type: {weed.type}</p>
                <p> THC: {weed.thc} %</p>
                
            </li>
        )
    }
}
