const { createPromiseThunk, reducerUtils } = require("../lib/asyncUtils");
const { requestLearnerMypage } = require("../lib/api");

//학습자 마이페이지 정보 조회하기
const GET_LEARNER_MYPAGE = "learnerMypage/GET_LEARNER_MYPAGE";
const GET_LEARNER_MYPAGE_SUCCESS = "learnerMypage/GET_LEARNER_MYPAGE_SUCCESS";
const GET_LEARNER_MYPAGE_ERROR = "learnerMypage/GET_LEARNER_MYPAGE_ERROR";
//thunk
export const getLearnerMypage = createPromiseThunk(GET_LEARNER_MYPAGE, requestLearnerMypage);
const initialState = reducerUtils.initial();

export default function learnerMypage(state = initialState, action) {
    switch (action.type) {
        case GET_LEARNER_MYPAGE:
            return reducerUtils.loading(state.data);
        case GET_LEARNER_MYPAGE_SUCCESS:
            return reducerUtils.success(action.payload);
        case GET_LEARNER_MYPAGE_ERROR:
            return reducerUtils.error(action.payload);
        default:
            return state;
    }
}
