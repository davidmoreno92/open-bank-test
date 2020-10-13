import React from 'react';

import './ResponseBox.scss';

function ResponseBox(props) {
    const { imgPath, title, message, className } = props;

    return (
        <div className={`row ${className ? className : ""}`} p={1}>
            {imgPath ?
                <div>
                    <img src={imgPath} alt="fake alt" />
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


export default ResponseBox;