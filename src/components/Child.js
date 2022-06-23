import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h1>Hello Child</h1>
                <h2>Nhận tiền của cha: {this.props.money}</h2>
            </div>
        )
    }
}

export default Child;