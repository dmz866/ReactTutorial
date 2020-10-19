import React, { Component } from 'react';
import { Product } from '../Product/Product';

export default class Products extends Component {
    url = 'https://course-api.netlify.app/api/react-prop-types-example';
    state = {
        products: []
    };
    render() {
        console.count('products');
        return (
            <div>
                <h1>Products</h1>
                {
                    this.state.products.map(product =>
                        <Product key={product.id} {...product} />
                    )
                }
            </div>
        )
    }

    componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        const response = await fetch(this.url);
        const data = await response.json();
        this.setState({ products: data });
    }
}
