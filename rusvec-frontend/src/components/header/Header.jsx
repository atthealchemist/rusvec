import React, { Component } from 'react';

import Contact from "../contact/Contact";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header>
                <nav className="level">
                    <div className="level-item">
                        <div className="logo blink">
                            <img src="assets/images/logo.png" alt="Rusvector logo" />
                        </div>
                    </div>
                    <div className="level-item">
                        <div className="contacts">
                            <Contact phone="84958921313" city="Москва" /><br/>
                            <Contact phone="88128921313" city="Санкт-Петербург" />
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;