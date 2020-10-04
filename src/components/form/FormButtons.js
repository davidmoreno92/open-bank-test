import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import { setStep, resetForm } from '../../actions/FormAction'
import './Form.scss';

class FormButtons extends Component {

    render() {
        return (
            <div className="buttons-box">
                <div>
                    {!!this.props.prev &&
                        <Button className="transparent" onClick={() => this.props.resetForm()}>
                            Cancelar
                        </Button>
                    }
                </div>
                <div>
                    {!!this.props.next && !this.props.disableNext &&
                        <Button onClick={() => !this.props.disableNext ? this.props.setStep(this.props.next) : () => { }}>
                            Siguiente
                            <i className="arrow right" />
                        </Button>
                    }
                </div>

                {!!this.props.submit &&
                    <div>
                        <Button label="Submit" onClick={() => this.props.submit()} />
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    setStep: (step) => dispatch(setStep(step)),
    resetForm: () => dispatch(resetForm())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormButtons)

