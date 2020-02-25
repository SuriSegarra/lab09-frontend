import React, { Component } from 'react'
import request from 'superagent';
export default class Updateweed extends Component {
    state = {
        types: [],
    };
componentDidMount = async () => {
    const types = await request.get(`https://weed-fullstack-lab.herokuapp.com/api/type`)

    this.setState({ types: types.body })
    
    const weed = await request.get(`https://weed-fullstack-lab.herokuapp.com/api/weed/${this.props.match.params.id}`)

    const weedToUpdate = weed.body[0];
console.log(weedToUpdate);
    this.setState({
        strain: weedToUpdate.strain,
        indoor: weedToUpdate.indoor,
        outdoor: weedToUpdate.outdoor,
        thc: weedToUpdate.thc,
        imgUrl: weedToUpdate.imgurl,
        type: weedToUpdate.type_id, 
        smell: weedToUpdate.smell
    });
}
    handleNameChange = (e) => {
        this.setState({ strain: e.target.value })
    }
    handleTypeChange = (e) => {
        this.setState({ type: Number(e.target.value) })
    }
    handleSmellChange = (e) => {
        this.setState({ smell: e.target.value })
    }
    handleTHCChange = (e) => {
        this.setState({thc: Number(e.target.value)} )
    }
    handleOutDoor = (e) => {
        const actualBool = e.target.value === 'false'
        ? false
        : true
        this.setState({ outdoor: actualBool })
    }
    handleIndoor = (e) => {
        const actualBool = e.target.value === 'false'
        ? false
        : true
        this.setState({ indoor: actualBool })
    }
    handleImageChange = (e) =>{
        this.setState({ imgUrl: e.target.value })
    }
    handleDelete = async () => {
        await request.delete(`https://weed-fullstack-lab.herokuapp.com/api/weed/${this.props.match.params.id}`)

        this.props.history.push('/');
    }
    handleSubmit = async (e) => {
        e.preventdefault();

        const newWeed = {
            strain: this.state.strain,
            indoor: this.state.indoor,
            outdoor: this.state.outdoor,
            smell: this.state.smell,
            imgUrl: this.state.imgUrl,
            type: this.state.type,
            thc: this.state.thc,
        }
        const dbWeed = await request.put(`https://weed-fullstack-lab.herokuapp.com/api/weed`, newWeed);

        console.log(dbWeed)

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    Add Product
                    <label>
                        Name:
                        <input onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        Type:
                        <select onChange={this.handleTypeChange}>
                            {this.state.types.map(type => <option value={type.id}>
                                {type.name}
                            </option>)}
                        </select>
                    </label>
                    <label>
                        THC:
                        <input type='number' onChange={this.handleTHCChange}/>
                    </label>
                        <label>
                            Image:
                            <input onChange={this.handleImageChange}/>
                        </label>
                        <label>
                            Indoor:
                            <select onChange={this.handleIndoor}>
                                <option value='true'>True</option>
                                <option value='false'>False</option>
                            </select>
                        </label>
                        <label>
                            Outdoor:
                            <select onChange={this.handleOutDoor}>
                                <option value='true'>True</option>
                                <option value='false'>False</option>
                            </select>
                        </label>
                        <label>
                            Smell
                            <input onChange={this.handleSmellChange}></input>
                        </label>
                        <button>Submit</button>
                </form>

                <button onClick={ this.handleDelete}
                style={{background:'red', marginTop:100}}>DELETE</button>
            </div>
        )
    }
}
