import React, { Component } from "react"

import './Stepper.scss';

export default class Stepper extends Component {
    render() {
        const { steps, step } = this.props;

        return (
            <div className="stepper-container">
                {
                    steps.map((element, index) => {
                        const currentStep = step;
                        const lastStep = step.length - 1;

                        const isCurrentStep = currentStep === index;
                        const isLastStep = currentStep === lastStep;

                        return (
                            <span>
                                <div className={`stepper ${!isLastStep && isCurrentStep ? "active" : isLastStep === 2 || currentStep > index ? "done" : ''}`}>
                                    {isCurrentStep && <div className="triangle"></div>}
                                    {currentStep > index || isLastStep ? <span className="number">&#10004;</span> : <span className="number">{index + 1}</span>}
                                </div>
                                {index !== lastStep && <div className={`separator ${currentStep > index || isLastStep ? "done" : ''}`} />}
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}