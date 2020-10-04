import React, { Component } from 'react';

import './ErrorBox.scss';

export default class ErrorBox extends Component {
    render() {
        return (
            <div className="errors">
                {this.props.message}
            </div>
        )
    }
}