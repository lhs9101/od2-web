const { createPromiseThunk, reducerUtils } = require("../lib/asyncUtils");
const { requestLearnerQuestionInfo, requestQuestionKeep, requestQuestionHistory } = require("../lib/api");

//학습자 문항 정보 조회하기
const GET_LEARNER_QUESTION = "learnerQuestion/GET_LEARNER_QUESTION";
const GET_LEARNER_QUESTION_SUCCESS = "learnerQuestion/GET_LEARNER_QUESTION_SUCCESS";
const GET_LEARNER_QUESTION_ERROR = "learnerQuestion/GET_LEARNER_QUESTION_ERROR";
const UPDATE_LEARNER_QUESTION = "learnerQuestion/UPDATE_LEARNER_QUESTION";
const UPDATE_LEARNER_QUESTION_SUCCESS = "learnerQuestion/UPDATE_LEARNER_QUESTION_SUCCESS";
const UPDATE_LEARNER_QUESTION_ERROR = "learnerQuestion/UPDATE_LEARNER_QUESTION_ERROR";
//초기화
const INITIALIZE_LEARNER_QUESTION = "learnerQuestion/INITIALIZE_LEARNER_QUESTION";
//thunk
export const getLearnerQuestion = createPromiseThunk(GET_LEARNER_QUESTION, requestLearnerQuestionInfo);
export const updateLearnerQuestionByKeep = createPromiseThunk(UPDATE_LEARNER_QUESTION, requestQuestionKeep);
export const updateLearnerQuestionByHistory = createPromiseThunk(UPDATE_LEARNER_QUESTION, requestQuestionHistory);
//액션생성함수
export const initializeLearnerQuestion = () => ({ type: INITIALIZE_LEARNER_QUESTION });
const initialState = reducerUtils.initial();

export default function learnerQuestion(state = initialState, action) {
    switch (action.type) {
        case INITIALIZE_LEARNER_QUESTION:
            return initialState;
        case GET_LEARNER_QUESTION:
        case UPDATE_LEARNER_QUESTION:
            return reducerUtils.loading(state.data);
        case GET_LEARNER_QUESTION_SUCCESS:
            return reducerUtils.success(action.payload);
        case UPDATE_LEARNER_QUESTION_SUCCESS:
            return { loading: false, error: null, data: { ...state.data, ...action.payload } };
        case GET_LEARNER_QUESTION_ERROR:
        case UPDATE_LEARNER_QUESTION_ERROR:
            return reducerUtils.error(action.payload);

        default:
            return state;
    }
}
