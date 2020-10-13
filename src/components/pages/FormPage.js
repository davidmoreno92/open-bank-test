import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormProduct from '../form/FormProduct'
import FormPassword from '../form/FormPassword'
import FormFeedback from '../form/FormFeedback'

import Stepper from '../stepper/Stepper'

const steps = ["FormProduct", "FormPassword", "FormFeedback"];

class FormPage extends Component {
    renderForm = (step) => {
        switch (step) {
            case 0: return <FormProduct />
            case 1: return <FormPassword />
            case 2: return <FormFeedback />
            default:
                return <FormProduct />
        }
    }

    render() {
        return (
            <div className="form-page adaptive-content">
                <Stepper step={this.props.step} steps={steps}/>
                {this.renderForm(this.props.step)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step: state.FormReducer.step
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)