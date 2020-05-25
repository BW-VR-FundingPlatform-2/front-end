import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import contactUsReducer from './contactUsReducer'
import campaignFormReducer from './campaignFormReducer'
import dashboardProjectTitleReducer from './dashboardProjectTitleReducer'


const rootReducer = combineReducers({
  loginReducer,
  contactUsReducer,
  campaignFormReducer,
  dashboardProjectTitleReducer
});

export default rootReducer;