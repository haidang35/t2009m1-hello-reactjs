import React, { Component } from 'react';

class CreateProduct extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0,
            quantity: 0,
            description: '',
            thumbnail: '',
            status: 1,
        }
    }

    componentDidMount() {
    }

    fetchData = () => {
        fetch('https://spring-summer.herokuapp.com/api/v1/products')
            .then(res => res.json())
            .then(res => {
                
            })
    }

    submitForm = () => {
        fetch('https://spring-summer.herokuapp.com/api/v1/products', {
            method: 'POST',
            body: JSON.stringify( {
                name: this.state.name,
                thumbnail: this.state.thumbnail,
                description: this.state.description,
                price: this.state.price,
                quantity: this.state.quantity,
                status: this.state.status
            }),
            headers: {
                'Content-Type': 'application/json',
              },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <div>
                <h1>Hello CreateProduct</h1>
             Name:   <input type="text" onChange={(ev) => this.setState({ name: ev.target.value }) }/> <br/>
             Thumbnail:   <input type="url" onChange={(ev) => this.setState({ thumbnail: ev.target.value }) }/> <br/>
             Price:   <input type="number" onChange={(ev) => this.setState({ price: ev.target.value }) }/> <br/>
             Quantity:   <input type="number" onChange={(ev) => this.setState({ quantity: ev.target.value }) }/> <br/>
             Description:   <input type="text" onChange={(ev) => this.setState({ description: ev.target.value }) }/> <br/>
             Status:   <select onChange={(ev) => this.setState({ status: ev.target.value }) }>
                <option value={1}>Active</option>
                <option value={2}>Deactive</option>
             </select>
             <button onClick={this.submitForm} type="sumit">Submit</button>
            </div>
        )
    }
}

export default CreateProduct;