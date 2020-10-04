import React, { Component } from 'react';

import './ResponseBox.scss';

export default class ResponseBox extends Component {
    render() {
        const { imgPath, title, message, className } = this.props;

        return (
            <div className={`row ${className ? className : ""}`} p={1}>
                {imgPath ?
                    <div>
                        <img src={imgPath} alt="fake alt"/>
                    </div>
                    : ''
                }
                <div>
                    {title ?
                        <h1>
                            {title}
                        </h1>
                        : ''
                    }
                    {message ?
                        <p>
                            {message}
                        </p>
                        : ''
                    }
                </div>
            </div>
        )
    }
}