import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import './Loader.scss';

function Loader() {
    return (
        <div className="loader">
            <CircularProgress />
        </div>
    )
}

export default Loader;