import { submitForm } from '../services/api'

export const SET_STEP = 'SET_STEP';
export const UPDATE_FORM = 'UPDATE_FORM';
export const RESET_FORM = 'RESET_FORM';
export const SEND_FORM = 'SEND_FORM';
export const SEND_FORM_RESPONSE = 'SEND_FORM_RESPONSE';

export const setStep = (step) => {
    return {
        type: SET_STEP,
        payload: step
    }
}

export const updateForm = (field, value) => {
    return {
        type: UPDATE_FORM,
        payload: {
            field,
            value
        }
    }
}

export const resetForm = () => {
    return {
        type: RESET_FORM
    }
}

export const sendForm = (formData) => {
    return {
        type: SEND_FORM,
        formData
    }
}


export const sendFormData = async (dispatch, formData) => {
    dispatch({ type: SEND_FORM });
    submitForm(formData.password, formData.passwordRepeat, formData.clue).then(data => {
        dispatch({ type: SEND_FORM_RESPONSE, payload: data });
    }).catch(e => {
        let data = {};
        data.hasError = e;
        dispatch({ type: SEND_FORM_RESPONSE, payload: data });
    });

};

