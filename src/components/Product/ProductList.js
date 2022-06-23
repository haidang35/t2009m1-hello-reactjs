import axios from 'axios';
import React, { Component } from 'react';
class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch('https://spring-summer.herokuapp.com/api/v1/products')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                })
            })
    }

    deleteProduct = (id) => {
        const url = `https://spring-summer.herokuapp.com/api/v1/products/${id}`;
        // fetch(url, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type':'application/json',
        //       },
        //       body: JSON.stringify({})
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //     })
        //     this.fetchData();

        axios.delete(url)
        .then(res => {
            this.fetchData();
        });

    }

    render() {
        return (
            <div>
                <h1>Hello ProductList</h1>
                <ul>
                    {
                        this.state.products.map((product, index) => {
                            return (
                                <li key={index}>{product.name} - Price: {product.price} 
                                <button onClick={() => this.deleteProduct(product.id)}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ProductList;