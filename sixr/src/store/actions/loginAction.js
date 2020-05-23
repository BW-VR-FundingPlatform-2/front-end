
const FORM_SUBMITTED = "FORM_SUBMITTED"

const loginAction  = formValues => {
    return (dispatch) => {
        dispatch({type:FORM_SUBMITTED})
    }
}

export default loginAction