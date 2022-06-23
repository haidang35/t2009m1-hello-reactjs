import React, { Component } from 'react';
import Child from './Child';
import Child2 from './Child2';

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            money: 600
        }
    }
    render() {
        return (
            <div>
                <h1>Hello Parent</h1>
                <h2>Money: {this.state.money}</h2>
                <Child money={this.state.money}/>
            </div>
        )
    }
}

export default Parent;