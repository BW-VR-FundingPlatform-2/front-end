const intialState = {
    isSubmitted:false,
}

const contactUsReducer = (state = intialState, action ) => {
    switch(action.type) {
        case "FORM_SUBMITTED" :
            return {
                ...state,

                isSubmitted:true

            }
        default :
        return state
    }
}

export default contactUsReducer