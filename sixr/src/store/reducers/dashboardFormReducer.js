// const initialState = [{
//     pledgeAmount:"",
//     discount:"",
//     deliveryDate:"",
//     projectDescription:"",
// }]

const initialState = []

const dashboardFormReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case "CREATE_AWARD" :
            return [
                ...state,
                {                
                pledgeAmount:action.payload.pledgeAmount,
                discount:action.payload.discount,
                deliveryDate:action.payload.deliveryDate,
                projectDescription:action.payload.projectDescription,
            }]
        default:
            return state
    }
}

export default dashboardFormReducer