import React, { Component } from 'react'
import request from 'superagent';
import WeedItem from './WeedItem.js';
import { Link } from 'react-router-dom';
import Updateweed from './Updateweed.js';
// const getWeed = (weedId) => request.get(`https://weed-fullstack-lab.herokuapp.com/api/weed/?${weedId}`);



export default class Detail extends Component {

    state = { weed: {} }

    componentDidMount = async () => {
    const singleWeed = await request.get(`https://weed-fullstack-lab.herokuapp.com/api/weed/${this.props.match.params.id}`)


        if(singleWeed.body) {
            this.setState({ weed: singleWeed.body[0] })
        }

        console.log(singleWeed.body);
    }

    render() {
         const { weed } = this.state;
         console.log(weed);
        return (
            <div className='weed-detail-div'>
               <WeedItem weed={ weed } />
               <Link to={`/update/${weed.id}`}>Update</Link>
               
            </div>
        )
    }
}
