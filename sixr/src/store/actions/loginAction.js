
const LOG_IN_FORM_SUBMITTED = "LOG_IN_FORM_SUBMITTED"

const loginAction  = formValues => {
    return (dispatch) => {
        dispatch({type:LOG_IN_FORM_SUBMITTED})
    }
}

export default loginAction 