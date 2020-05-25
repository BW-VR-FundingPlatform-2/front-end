const SUBMIT_TITLE_SUCCESS = "SUBMIT_TITLE_SUCCESS"

const dashboardTitleAction = (formValue) => {
    console.log("%c Project Title", "color:cornflowerblue", formValue)
    return (dispatch) => {
        dispatch({type:SUBMIT_TITLE_SUCCESS, payload:formValue})
    }
}

export default dashboardTitleAction