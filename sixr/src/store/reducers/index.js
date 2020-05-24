import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import contactUsReducer from './contactUsReducer'
import campaignFormReducer from './campaignFormReducer'


const rootReducer = combineReducers({
  loginReducer,
  contactUsReducer,
  campaignFormReducer
});

export default rootReducer;