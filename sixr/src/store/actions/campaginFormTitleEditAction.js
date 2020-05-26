const EDIT_PROJECT_TITLE = "EDIT_PROJECT_TITLE"


const campaignFormTitleEditAction = () => {
    return (dispatch) => {
        dispatch({type:EDIT_PROJECT_TITLE})
    }
}

export default campaignFormTitleEditAction