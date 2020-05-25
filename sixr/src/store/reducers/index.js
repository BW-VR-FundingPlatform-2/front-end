import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import contactUsReducer from './contactUsReducer'
import campaignFormReducer from './campaignFormReducer'
import dashboardProjectTitleReducer from './dashboardProjectTitleReducer'
import campaignFormTitleEditReducer from './campaignFormTitleEditReducer'

const rootReducer = combineReducers({
  loginReducer,
  contactUsReducer,
  campaignFormReducer,
  dashboardProjectTitleReducer,
  campaignFormTitleEditReducer
});

export default rootReducer;