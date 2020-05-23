import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import contactUsReducer from './contactUsReducer'

const rootReducer = combineReducers({
  loginReducer,
  contactUsReducer
});

export default rootReducer;