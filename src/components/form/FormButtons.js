import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import { setStep, resetForm } from '../../actions/FormAction'
import './Form.scss';

function FormButtons(props) {
    const { prev, next, disableNext, submit, setStep, resetForm } = props;

    return (
        <div className="buttons-box">
            <div>
                {!!prev &&
                    <Button className="transparent" onClick={() => resetForm()}>
                        Cancelar
                    </Button>
                }
            </div>
            <div>
                {!!next && !disableNext &&
                    <Button onClick={() => !disableNext ? setStep(next) : () => { }}>
                        Siguiente
                        <i className="arrow right" />
                    </Button>
                }
            </div>

            {!!submit &&
                <div>
                    <Button label="Submit" onClick={() => submit()} />
                </div>
            }

        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    setStep: (step) => dispatch(setStep(step)),
    resetForm: () => dispatch(resetForm())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormButtons)

