const SUBMIT_TITLE_SUCCESS = "SUBMIT_TITLE_SUCCESS"

const dashboardTitleAction = (formValue) => {
    return (dispatch) => {
        dispatch({type:SUBMIT_TITLE_SUCCESS, payload:formValue})
    }
}


export default dashboardTitleAction