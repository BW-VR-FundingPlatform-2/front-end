const initialtstate = {
    isLoading:false,
    email:"",
    password:"",
    error:false,
    errorMessage:"Incorrect Email or Password",
    success:false,
    token:""
  };
  
  const loginReducer = (state = initialtstate, action) => {
    switch (action.type) {
      case "LOG_IN_FORM_SUBMITTED" :
        return {
          ...state,
          isLoading:true,
        }
      case "LOGIN_FAIL" :
        return {
          ...state,
          isLoading:false,
          error:true,
          email:"",
          password:"",
          errorMessage:state.errorMessage
        }
      case "LOGIN_SUCCESS" :
        return {
          ...state,
          isLoading:false,
          success:true,
          token:action.payload
        }
        case "LOG_OUT" :
          return {
            ...state,
            success:false
          }
      default:
        return state;
    }
  };
  
  export default loginReducer;