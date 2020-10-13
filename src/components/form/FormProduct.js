import React from 'react'
import { Checkbox } from '@material-ui/core'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import { withTranslation } from 'react-i18next'

import FormButtons from './FormButtons'
import { updateForm } from '../../actions/FormAction'
import './Form.scss';


function FormProduct(props) {
    const { agree, t } = props;

    const handleOnCheck = (event, isInputChecked) => {
        props.updateForm("agree", isInputChecked)
    }

    return (
        <div>
            <div className="stepInfo">
                <div>
                    <div className="row" p={1}>
                        <h1>
                            {t('form.product.title')}<hr></hr>
                        </h1>
                        <p>
                            {t('form.product.description')}
                        </p>
                    </div>
                    <div className="row images-row" p={1} m={1}>
                        <Box textAlign="center">
                            <img className="infoImg" src="/images/password-save.jpg" alt="image1alt" />
                            <p>{t('form.product.imagealt')}</p>
                        </Box>
                        <Box textAlign="center">
                            <img className="infoImg" src="/images/main-password.jpg" alt="image2alt" />
                            <p>{t('form.product.image2alt')}</p>
                        </Box>
                    </div>
                    <div className="row" p={1}>
                        <Box textAlign="left">
                            <h2>{t('form.product.section.title')}</h2>
                            <p>{t('form.product.section.description')}</p>
                        </Box>
                    </div>
                    <div className="row" p={1}>
                        <Box textAlign="left">
                            <h2>{t('form.product.section-two.title')}</h2>
                            {/* This should be replaced with Interpolate / Trans i18n component */}
                            <span dangerouslySetInnerHTML={{ __html: t('form.product.section-two.description') }} />
                        </Box>
                    </div>

                    <Checkbox
                        checked={agree ? true : false}
                        onChange={handleOnCheck}
                    />
                    {t('form.product.check-terms')}
                </div>
            </div>
            <FormButtons next={1} disableNext={!agree} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    agree: state.FormReducer.agree
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (field, value) => dispatch(updateForm(field, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(FormProduct));
