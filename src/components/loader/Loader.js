import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import './Loader.scss';

export default class Loader extends Component {
    
    render() {
        return (
            <div class="loader">
                <CircularProgress />
            </div>
        )
    }
}