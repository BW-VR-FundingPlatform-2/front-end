const initialState = {
    name: "",
    email: "",
    description: "",
    projectType: "",
    fundingGoal: "",
    formSubmitted:false,
}

const campaignFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CAMPAIGN_FORM_SUBMITTED" :
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                description: action.payload.description,
                projectType: action.payload.projectType,
                fundingGoal: action.payload.fundingGoal,
                formSubmitted:true
            }
        default :
        return state
    }
}

export default campaignFormReducer