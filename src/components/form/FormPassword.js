import React, { Component } from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import { updateForm } from '../../actions/FormAction'
import FormButtons from './FormButtons'
import validatePassword from '../../validation/passwordValidator'
import ErrorBox from '../errorBox/ErrorBox'
import './Form.scss';

class FormPassword extends Component {

    handleChange = (prop) => (event) => {
        this.props.updateForm(prop, event.target.value)

        if (prop === 'password') this.props.updateForm('validatedPassword', (validatePassword(event.target.value) && (event.target.value === this.props.passwordRepeat)))
        if (prop === 'passwordRepeat') this.props.updateForm('validatedPassword', (validatePassword(event.target.value) && (this.props.password === event.target.value)))
    };

    handleClickShowPassword = () => () => {
        this.props.updateForm('showPassword', !this.props.showPassword);
    };

    render() {
        const { showPassword, password, passwordRepeat, validatedPassword, clue, t } = this.props;
        return (
            <div>
                <div className="stepPassword">
                    <form>
                        <div>
                            <div className="row" p={1}>
                                <h1>
                                    {t('form.password.title')}<hr></hr>
                                </h1>
                                <p>
                                    {t('form.password.description')}
                                </p>
                            </div>
                            <div className="row password-row" p={1} m={0}>
                                <div>
                                    <InputLabel htmlFor="create-password">{t('form.password.input-password')} *</InputLabel>
                                    <OutlinedInput
                                        id="create-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        placeholder={t('form.password.password-placeholder')}
                                        onChange={this.handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword()}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="repeat-password">{t('form.password.input-password-repeat')}</InputLabel>
                                    <OutlinedInput
                                        id="repeat-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={passwordRepeat}
                                        placeholder={t('form.password.repeat-placeholder')}
                                        onChange={this.handleChange('passwordRepeat')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword()}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </div>
                            </div>
                            {password && passwordRepeat
                                ? (password === passwordRepeat) && !validatedPassword ?
                                    <ErrorBox message={t('form.password.validation.security-reason')}></ErrorBox>
                                    : (password !== passwordRepeat) ?
                                        <ErrorBox message={t('form.password.validation.not-equal')}></ErrorBox>
                                        : false
                                : <ErrorBox message={t('form.password.validation.required')}></ErrorBox>}
                            <div className="row clue-row" p={1} m={0}>
                                <p>
                                    {t('form.password.clue.title')}
                                </p>
                                <div>
                                    <InputLabel htmlFor="clue">{t('form.password.clue.input')}</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id='clue'
                                        type='text'
                                        value={clue}
                                        placeholder={t('form.password.clue.placeholder')}
                                        onChange={this.handleChange('clue')}
                                        multiline={true}
                                    />
                                    <div className={`text-counter ${clue.length >= 255 ? 'exceed' : ""}`}>
                                        {clue.length >= 255 ?
                                            <ErrorBox message={t('form.password.validation.maximum-length')}></ErrorBox>
                                            : false}
                                        <div>
                                            {clue.length}/255
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <FormButtons prev={1} next={3} disableNext={!validatedPassword || clue.length > 255} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    password: state.FormReducer.password,
    passwordRepeat: state.FormReducer.passwordRepeat,
    showPassword: state.FormReducer.showPassword,
    validatedPassword: state.FormReducer.validatedPassword,
    clue: state.FormReducer.clue
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (field, value) => dispatch(updateForm(field, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(FormPassword))
