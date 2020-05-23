const initialtstate = {
    isLoading:false,
    email:"",
    password:"",
    error:false,
    errorMessage:"Incorrect Email or Password",
    success:false,
  };
  
  const loginReducer = (state = initialtstate, action) => {
    switch (action.type) {
      case "FORM_SUBMITTED" :
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
        }
      case "LOGIN_SUCCESS" :
        return {
          ...state,
          isLoading:false,
          success:true
        }
      default:
        return state;
    }
  };
  
  export default loginReducer;