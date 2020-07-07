const { createPromiseThunk, reducerUtils } = require("../lib/asyncUtils");
const { requestLearnerQuestionInfo } = require("../lib/api");

//학습자 문항 정보 조회하기
const GET_LEARNER_QUESTION = "learnerQuestion/GET_LEARNER_QUESTION";
const GET_LEARNER_QUESTION_SUCCESS = "learnerQuestion/GET_LEARNER_QUESTION_SUCCESS";
const GET_LEARNER_QUESTION_ERROR = "learnerQuestion/GET_LEARNER_QUESTION_ERROR";

//thunk
export const getLearnerQuestion = createPromiseThunk(GET_LEARNER_QUESTION, requestLearnerQuestionInfo);

const initialState = reducerUtils.initial();

export default function learnerQuestion(state = initialState, action) {
    switch (action.type) {
        case GET_LEARNER_QUESTION:
            return reducerUtils.loading(state.data);
        case GET_LEARNER_QUESTION_SUCCESS:
            return reducerUtils.success(action.payload);
        case GET_LEARNER_QUESTION_ERROR:
            return reducerUtils.error(action.payload);
        default:
            return state;
    }
}
