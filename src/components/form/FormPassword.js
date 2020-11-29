import React, { useState } from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { withTranslation } from 'react-i18next'

import FormButtons from './FormButtons'
import validatePassword from '../../validation/passwordValidator'
import ErrorBox from '../errorBox/ErrorBox'
import './Form.scss';


function FormPassword(props) {
    const { t } = props;
    const [values, setValues] = useState({ showPassword: '', password: '', passwordRepeat: '', clue: '' })
    const [isValid, setIsValid] = useState(false);
    const [showPassword, setShowPassword] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value });
        if (name === 'password') setIsValid(validatePassword(value) && (value === values.passwordRepeat));
        if (name === 'passwordRepeat') setIsValid(validatePassword(value) && (values.password === value));

    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={values.password}
                                    placeholder={t('form.password.password-placeholder')}
                                    onChange={handleChange}
                                    autoComplete="on"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
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
                                    name="passwordRepeat"
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.passwordRepeat}
                                    placeholder={t('form.password.repeat-placeholder')}
                                    onChange={handleChange}
                                    autoComplete="on"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </div>
                        </div>
                        {values.password && values.passwordRepeat
                            ? (values.password === values.passwordRepeat) && !isValid ?
                                <ErrorBox message={t('form.password.validation.security-reason')}></ErrorBox>
                                : (values.password !== values.passwordRepeat) ?
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
                                    id="clue"
                                    name="clue"
                                    type="text"
                                    value={values.clue}
                                    placeholder={t('form.password.clue.placeholder')}
                                    onChange={handleChange}
                                    multiline={true}
                                />
                                <div className={`text-counter ${values.clue.length >= 255 ? 'exceed' : ""}`}>
                                    {values.clue.length >= 255 ?
                                        <ErrorBox message={t('form.password.validation.maximum-length')}></ErrorBox>
                                        : false}
                                    <div>
                                        {values.clue.length}/255
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <FormButtons prev={0} next={2} disableNext={!isValid || values.clue.length > 255} />
        </div>
    )
}

export default (withTranslation()(FormPassword))
