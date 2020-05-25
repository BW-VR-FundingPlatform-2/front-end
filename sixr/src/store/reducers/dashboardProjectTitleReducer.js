const initialState = {
    title:"",
    isSubmitted:false,
    displayForm: true,
}

const dashboardProjectTitleReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "SUBMIT_TITLE_SUCCESS" :
            return {
                ...state,
                title:action.payload.title,
                isSubmitted:true,
                displayForm: false
            }
        case "SUBMIT_TITLE_EDIT" :
            return {
                ...state,
                title:"",
                isSubmitted:false,
                displayForm: true,
            }

        default:
            return state
    }
}

export default dashboardProjectTitleReducer 