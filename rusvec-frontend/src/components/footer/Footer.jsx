import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <footer className="footer">
                <h2>Contact us @ <a href="mailto:stu@rusvector.ru">stu@rusvector.ru</a></h2>
            </footer>
        );
    }
}

export default Footer;