import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <span className="contact-line"><a href="tel:{this.props.phone}">{this.props.phone}</a>&nbsp;{this.props.city}</span>
        );
    }
}

export default Contact;