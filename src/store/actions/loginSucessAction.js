const LOGIN_SUCCESS = "LOGIN_SUCCESS"

const loginSuccess = () => {
    return (dispatch) => {
        dispatch({type:LOGIN_SUCCESS})
    }
}

export default loginSuccess