import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import { sendFormData } from '../../actions/FormAction'
import ResponseBox from '../responseBox/ResponseBox'
import ResponseBoxButtons from '../responseBox/ResponseBoxButtons'
import Loader from '../loader/Loader'
import './Form.scss';

class FormFeedback extends Component {

    async componentDidMount() {
        await this.props.sendFormData({ password: this.props.password, passwordRepeat: this.props.passwordRepeat, clue: this.props.clue });
    }

    render() {
        const { isSending, responseData, responseOK, t } = this.props;
        const isOk = responseData.status === responseOK;

        const imgPath = isOk ? "/images/success-icon.jpg" : "/images/error-icon.jpg";
        const title = isOk ? t('form.feedback.success.title') : t('form.feedback.failed.title');
        const message = isOk ? t('form.feedback.success.message'): t('form.feedback.failed.message');
        const buttonMessage = isOk ? t('form.feedback.success.button-text') : t('form.feedback.failed.button-text');
        const buttonPath = isOk ? "/" : "";

        return (
            <div>
                {!isSending && responseData ?
                    <>
                        <div className="stepFeedback">
                            <ResponseBox className="notification-row" imgPath={imgPath} title={title} message={message} />
                        </div>
                        <ResponseBoxButtons onClick={this.clickHandler} message={buttonMessage} path={buttonPath} />
                    </>
                    :
                    <Loader />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isSending: state.FormReducer.isSending,
    responseData: state.FormReducer.responseData,
    password: state.FormReducer.password,
    passwordRepeat: state.FormReducer.passwordRepeat,
    clue: state.FormReducer.clue,
    responseOK: state.FormReducer.responseOK
})

const mapDispatchToProps = (dispatch) => ({
    sendFormData: (formData) => sendFormData(dispatch, formData)
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(FormFeedback))