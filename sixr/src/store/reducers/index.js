import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import contactUsReducer from './contactUsReducer'
import campaignFormReducer from './campaignFormReducer'
import dashboardProjectTitleReducer from './dashboardProjectTitleReducer'
import dashboardFormReducer from './dashboardFormReducer'
import signUpReducer from './signUpReducer'

const rootReducer = combineReducers({
  loginReducer,
  contactUsReducer,
  campaignFormReducer,
  dashboardProjectTitleReducer,
  dashboardFormReducer,
  signUpReducer,

});

export default rootReducer;