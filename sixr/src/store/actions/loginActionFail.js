const LOGIN_FAIL = "LOGIN_FAIL"
const FORM_SUBMITTED = "FORM_SUBMITTED"

const loginActionFail = dispatch => {
    return (dispatch) => {
        dispatch({type:LOGIN_FAIL})
    }
}

export default loginActionFail