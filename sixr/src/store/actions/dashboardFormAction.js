const CREATE_AWARD = "CREATE_AWARD"

const dashboardFormAction = (formValues) => {
    return (dispatch) => 
        dispatch({type:CREATE_AWARD, payload:formValues})
}

export default dashboardFormAction