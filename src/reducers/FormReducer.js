import { SET_STEP, UPDATE_FORM, RESET_FORM, SEND_FORM, SEND_FORM_RESPONSE } from '../actions/FormAction'

const initialState = {
    step: 1,
    agree: false,
    password: '',
    passwordRepeat: '',
    showPassword: true,
    validatedPassword: false,
    clue: '',
    isSending: false,
    responseData: {},
    responseOK: 200,
    responseKO: 401
}

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STEP:
            return {
                ...state,
                step: action.payload
            }
        case UPDATE_FORM:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            }
        case RESET_FORM:
            return {
                ...initialState,
            }
        case SEND_FORM:
            return {
                ...state,
                isSending: true
            }
        case SEND_FORM_RESPONSE:
            return {
                ...state,
                isSending: false,
                responseData: action.payload
            }
        default:
            return {
                ...initialState
            }
    }
}


export default FormReducer