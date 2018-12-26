import React, { Component } from 'react';

class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <img src={this.props.logo} alt=""/>
        );
    }
}

export default Client;