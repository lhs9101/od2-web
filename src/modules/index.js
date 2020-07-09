import { combineReducers } from "redux";
import learnerAssessment from "./learnerAssessment";
import learnerMypage from "./learnerMypage";
import learnerQuestion from "./learnerQuestion";
import learnerWrongAnswer from "./learnerWrongAnswer";

const appReducer = combineReducers({ learnerAssessment, learnerMypage, learnerQuestion, learnerWrongAnswer });
function rootReducer(state, action) {
    if (action.type === "SIGN_OUT") {
        state = undefined;
    }
    return appReducer(state, action);
}
export const signOutRequest = () => ({ type: "SIGN_OUT" });
export default rootReducer;
