import { combineReducers } from "redux";
import learnerAssessment from "./learnerAssessment";
import learnerMypage from "./learnerMypage";
import learnerQuestion from "./learnerQuestion";
const rootReducer = combineReducers({ learnerAssessment, learnerMypage, learnerQuestion });

export default rootReducer;
