import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';
import WeedItem from './WeedItem.js';


const getWeedList = () => request.get(`http://weed-fullstack-lab.herokuapp.com/api/weed`);

export default class List extends Component {

    state = {
        weed: [],
    }

    async componentDidMount() {
        const data = await getWeedList()
        console.log(data.body);
        this.setState({
            weed: data.body
        })
        
    }

    render() {
        return (
            <div>
                <h1 className='list-h1'>Products</h1>
             <ul id='weed-list'>
               {
                   this.state.weed.map(weed =>
                    <Link to={`/detail/${weed.id}`}>
                    <WeedItem weed={weed}/>
                    </Link>
                   )
               }
           </ul>

            </div>
        );
    }
}
