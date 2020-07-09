/**액션 타입 */

import { requestLearnerInfo, requestLearnerProgress, requestLearnerResultReport } from "../lib/api";
import { createPromiseThunk, reducerUtils, handleAsyncActions } from "../lib/asyncUtils";

//학습자 정보 조회하기
const GET_LEARNER_INFO = "learnerAssessment/GET_LEARNER_INFO";
const GET_LEARNER_INFO_SUCCESS = "learnerAssessment/GET_LEARNER_INFO_SUCCESS";
const GET_LEARNER_INFO_ERROR = "learnerAssessment/GET_LEARNER_INFO_ERROR";
//학습자 진단 현황 조회하기
const GET_LEARNER_PROGRESS = "learnerAssessment/GET_LEARNER_PROGRESS";
const GET_LEARNER_PROGRESS_SUCCESS = "learnerAssessment/GET_LEARNER_PROGRESS_SUCCESS";
const GET_LEARNER_PROGRESS_ERROR = "learnerAssessment/GET_LEARNER_PROGRESS_ERROR";
//학습자 학습 결과 조회하기
const GET_LEARNER_RESULT = "learnerAssessment/GET_LEARNER_RESULT";
const GET_LEARNER_RESULT_SUCCESS = "learnerAssessment/GET_LEARNER_RESULT_SUCCESS";
const GET_LEARNER_RESULT_ERROR = "learnerAssessment/GET_LEARNER_RESULT_ERROR";
//Thunk
export const getLearnerInfo = createPromiseThunk(GET_LEARNER_INFO, requestLearnerInfo);
export const getLearnerProgress = createPromiseThunk(GET_LEARNER_PROGRESS, requestLearnerProgress);
export const getLearnerResult = createPromiseThunk(GET_LEARNER_RESULT, requestLearnerResultReport);
//액션 생성함수
const initialState = {
    learnerInfo: reducerUtils.initial(),
    progressInfo: reducerUtils.initial(),
    resultInfo: reducerUtils.initial(),
};
//리듀서
export default function learnerAssessment(state = initialState, action) {
    switch (action.type) {
        case GET_LEARNER_INFO:
        case GET_LEARNER_INFO_SUCCESS:
        case GET_LEARNER_INFO_ERROR:
            return handleAsyncActions(GET_LEARNER_INFO, "learnerInfo")(state, action);
        case GET_LEARNER_PROGRESS:
        case GET_LEARNER_PROGRESS_SUCCESS:
        case GET_LEARNER_PROGRESS_ERROR:
            return handleAsyncActions(GET_LEARNER_PROGRESS, "progressInfo")(state, action);
        case GET_LEARNER_RESULT:
        case GET_LEARNER_RESULT_SUCCESS:
        case GET_LEARNER_RESULT_ERROR:
            return handleAsyncActions(GET_LEARNER_RESULT, "resultInfo")(state, action);
        default:
            return state;
    }
}
