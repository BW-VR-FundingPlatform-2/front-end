const CAMPAIGN_TITLE_EDIT = "CAMPAIGN_TITLE_EDIT"

const campaignFormTitleEditAction = () => {
    return (dispatch) => {
        dispatch({type:CAMPAIGN_TITLE_EDIT})
    }
}

export default campaignFormTitleEditAction