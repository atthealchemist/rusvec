import React, { Component } from 'react';

class FeedbackFab extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <button onclick="showModal()" className="feedback-fab" data-target="modal" aria-haspopup="true"><i className="fas fa-phone fa-3x"></i></button>
        );
    }
}

export default FeedbackFab;