import React from 'react'
import { connect } from 'react-redux'

import FormProduct from '../components/form/FormProduct'
import FormPassword from '../components/form/FormPassword'
import FormFeedback from '../components/form/FormFeedback'

import Stepper from '../components/stepper/Stepper';


function FormPage(props) {
    const { step } = props;
    const steps = ["FormProduct", "FormPassword", "FormFeedback"];

    const renderForm = () => {
        switch (step) {
            case 0: return <FormProduct />
            case 1: return <FormPassword />
            case 2: return <FormFeedback />
            default:
                return <FormProduct />
        }
    }

    return (
        <div className="form-page adaptive-content">
            <Stepper step={step} steps={steps} />
            {renderForm()}
        </div>
    )

}

const mapStateToProps = (state) => ({
    step: state.FormReducer.step
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)