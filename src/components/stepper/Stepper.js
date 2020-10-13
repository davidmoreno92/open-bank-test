import React from "react"

import './Stepper.scss';

function Stepper(props) {
    const { steps, step } = props;

    return (
        <div className="stepper-container">
            {
                steps.map((element, index) => {
                    const currentStep = step;
                    const lastStep = steps.length - 1;

                    const isCurrentStep = currentStep === index;
                    const isLastStep = currentStep === lastStep;

                    return (
                        <span key={index}>
                            <div className={`stepper ${!isLastStep && isCurrentStep ? "active" : isLastStep || currentStep > index ? "done" : ''}`}>
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

export default Stepper;