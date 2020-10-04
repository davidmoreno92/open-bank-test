import React, { Component } from "react"

import './Stepper.scss';

export default class Stepper extends Component {
    render() {
        const { steps } = this.props;

        return (
            <div className="stepper-container">
                {
                    steps.map((element, index) => {
                        return (
                            <span key={index}>
                                <div className={`stepper ${this.props.step !== 3 && this.props.step === index + 1 ? "active" : this.props.step === 3 || this.props.step > index + 1 ? "done" : ''}`}>
                                    {this.props.step === index + 1 && <div className="triangle"></div>}
                                    {this.props.step > index + 1 || this.props.step === 3 ? <span className="number">&#10004;</span> : <span className="number">{index + 1}</span>}
                                </div>
                                {index !== steps.length - 1 && <div className={`separator ${this.props.step > index + 1 || this.props.step === 3 ? "done" : ''}`} />}
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}