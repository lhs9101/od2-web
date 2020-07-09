import { createPromiseThunk, reducerUtils } from "../lib/asyncUtils";
import { requestWrongAnswerInfo } from "../lib/api";

const GET_LEARNER_WRONG_ANSWER = "/learnerWrongAnswer/GET_LEARNER_WRONG_ANSWER";
const GET_LEARNER_WRONG_ANSWER_SUCCESS = "/learnerWrongAnswer/GET_LEARNER_WRONG_ANSWER_SUCCESS";
const GET_LEARNER_WRONG_ANSWER_ERORR = "/learnerWrongAnswer/GET_LEARNER_WRONG_ANSWER_ERORR";

export const getLearnerWrongAnswer = createPromiseThunk(GET_LEARNER_WRONG_ANSWER, requestWrongAnswerInfo);

const initialState = reducerUtils.initial();

export default function learnerWrongAnswer(state = initialState, action) {
    switch (action.type) {
        case GET_LEARNER_WRONG_ANSWER:
            return reducerUtils.loading(state.data);
        case GET_LEARNER_WRONG_ANSWER_SUCCESS:
            return reducerUtils.success(action.payload);
        case GET_LEARNER_WRONG_ANSWER_ERORR:
            return reducerUtils.error(action.payload);
        default:
            return state;
    }
}
