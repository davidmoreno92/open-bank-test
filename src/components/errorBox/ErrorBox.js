import React from 'react';

import './ErrorBox.scss';

function ErrorBox(props) {
    const { message } = props;

    return (
        <div className="errors">
            {message}
        </div>
    )
}

export default ErrorBox;