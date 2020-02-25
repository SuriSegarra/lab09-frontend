import React, { Component } from 'react'
import request from 'superagent';
import WeedItem from './WeedItem.js';

// const getWeed = (weedId) => request.get(`https://weed-fullstack-lab.herokuapp.com/api/weed/?${weedId}`);



export default class Detail extends Component {

    state = { weed: {} }

    componentDidMount = async () => {
    const singleWeed = await request.get(`https://weed-fullstack-lab.herokuapp.com/api/weed/${this.props.match.params.id}`)

    
    
    
    
        //     const data = await getWeed(this.props.match.params._strain);
    //     console.log(this.props.match.params._strain)

    //     console.log(data.body)

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
            </div>
        )
    }
}
