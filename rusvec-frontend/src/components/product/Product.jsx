import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* <div className="product-header">
                    <h1>{this.props.title} по адресу: <a href="google.com">{this.props.address}</a></h1>
                </div>
                <div className="product-images"> */}
                    {this.props.images.map((image, index) => {
                        return (
                            <div key={index}><img className="img" src={image} alt="" /></div>
                            
                        )
                    })}
                {/* </div>
                <div className="product-profit">
                    <h1>Экономия составила: <span className="sticker">{this.props.profit.value} {this.props.profit.currency}</span></h1>
                </div> */}
            </div>
        );
    }
}

export default Product;