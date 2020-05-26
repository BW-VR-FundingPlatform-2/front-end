import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import contactUsReducer from './contactUsReducer'
import campaignFormReducer from './campaignFormReducer'
import dashboardProjectTitleReducer from './dashboardProjectTitleReducer'
import dashboardFormReducer from './dashboardFormReducer'

const rootReducer = combineReducers({
  loginReducer,
  contactUsReducer,
  campaignFormReducer,
  dashboardProjectTitleReducer,
  dashboardFormReducer,

});

export default rootReducer;