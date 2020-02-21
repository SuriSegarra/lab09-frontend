import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom';
// import WeedItem from './WeedItem.js';


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
           <div>hello</div>
        );
    }
}
