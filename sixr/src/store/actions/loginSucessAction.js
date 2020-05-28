const LOGIN_SUCCESS = "LOGIN_SUCCESS"

const loginSuccess = (token) => {
    return (dispatch) => {
        dispatch({type:LOGIN_SUCCESS, payload:token})
    }
}

export default loginSuccess