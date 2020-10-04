import React, { Component } from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { resetForm } from '../../actions/FormAction'
import './ResponseBox.scss';

class ResponseBoxButtons extends Component {
    render() {
        const { message } = this.props;
        return (
            <Box className="buttons-box">
                <Box className="right">
                    <Button onClick={() => this.props.resetForm()} className="transparent pink">
                        {message ? message : 'Volver a Password Manager'}
                        <i className="arrow right" />
                    </Button>
                </Box>
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    resetForm: () => dispatch(resetForm())
})



export default connect(mapStateToProps, mapDispatchToProps)(ResponseBoxButtons)