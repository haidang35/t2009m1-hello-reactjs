import React, { Component } from 'react';

class UpdateProduct extends Component {
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
        this.fetchData();
    }

    fetchData = () => {
        fetch('https://spring-summer.herokuapp.com/api/v1/products/17')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    name: res.name,
                    price: res.price,
                    quantity: res.quantity,
                    description: res.description,
                    thumbnail: res.thumbnail,
                    status: res.status,
                })
            })
    }

    submitForm = () => {
        fetch('https://spring-summer.herokuapp.com/api/v1/products/17', {
            method: 'PUT',
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
        const { name, thumbnail, price, quantity, description, status} = this.state;
        return (
            <div>
                <h1>Hello UpdateProduct</h1>
             Name:   <input type="text" value={name} onChange={(ev) => this.setState({ name: ev.target.value }) }/> <br/>
             Thumbnail:   <input type="url" value={thumbnail} onChange={(ev) => this.setState({ thumbnail: ev.target.value }) }/> <br/>
             Price:   <input type="number" value={price} onChange={(ev) => this.setState({ price: ev.target.value }) }/> <br/>
             Quantity:   <input type="number" value={quantity} onChange={(ev) => this.setState({ quantity: ev.target.value }) }/> <br/>
             Description:   <input type="text" value={description} onChange={(ev) => this.setState({ description: ev.target.value }) }/> <br/>
             Status:   <select onChange={(ev) => this.setState({ status: ev.target.value }) }>
                <option value={1} selected={status == 1}>Active</option>
                <option value={2} selected={status == 2}>Deactive</option>
             </select>
             <button onClick={this.submitForm} type="sumit">Submit</button>
            </div>
        )
    }
}

export default UpdateProduct;