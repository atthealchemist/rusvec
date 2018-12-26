import Product from "../product/Product";
import Slider from "react-slick";

import React, { Component } from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const sliderSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return (
            <div class="products-container">
                {this.props.products.map((product, index) => {
                    return (
                        <div key={index}>
                            {product.images.map((image, index) => {
                                return (
                                    <img key={index} className="img" src={image} alt="" />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ProductList;