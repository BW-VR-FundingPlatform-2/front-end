const initialState = {
    title:"",
    isSubmitted:false
}

const dashboardProjectTitleReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "SUBMIT_TITLE_SUCCESS" :
            return {
                ...state,
                title:action.payload.title,
                isSubmitted:true
            }
        default:
            return state
    }
}

export default dashboardProjectTitleReducer 