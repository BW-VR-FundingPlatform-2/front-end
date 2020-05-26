const initialState = {
    pledgeAmount:"",
    discount:"",
    deliveryDate:"",
    projectDescription:"",
}

const dashboardFormReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case "CREATE_AWARD" :
            return {
                ...state,
                pledgeAmount:action.payload.pledgeAmount,
                projectType:action.payload.projectType,
                deliveryDate:"",
                projectDescription:"",
            }
        default:
            return state
    }
}