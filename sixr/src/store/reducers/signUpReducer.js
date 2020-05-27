const initialState = {
    signUpSuccess:false,
    userExistErrorMessage:"Looks like you're already registered! Click the link below to log in!",
    userExistError: false,
    signUpLoading: false,
}

const signUpReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "SIGN_UP_SUCESS" :
            return {
                ...state,
                signUpSuccess:true,
                signUpLoading:true
            }
        case "USER_ALREADY_EXIST" :
            return {
                ...state,
                signUpSuccess:false,
                userExistError: true,
                userExistErrorMessage: state.userExistErrorMessage,
            }
        default :
        return state
    }
}

export default signUpReducer