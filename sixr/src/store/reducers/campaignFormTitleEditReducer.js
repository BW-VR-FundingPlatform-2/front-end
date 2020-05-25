const initialState = {
    editTitle:false,
    isSubmitted:true
}

const campaignFormTitleEditReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CAMPAIGN_TITLE_EDIT" :
            return {
                ...state,
                editTitle:true,
                isSubmitted:false
            }
        default:
            return state
    }
}

export default campaignFormTitleEditReducer