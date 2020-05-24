const CAMPAIGN_FORM_SUBMITTED = "CAMPAIGN_FORM_SUBMITTED"

const campaignFormAction = (formValues) => {
    console.log("FORM VALUES FROM ACTION", formValues)
    return (dispatch) => {
        dispatch({type:CAMPAIGN_FORM_SUBMITTED, payload:formValues})
    }
}

export default campaignFormAction