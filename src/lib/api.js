import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_HOST;
export const createGetRequest = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
export const createPostRequest = (url, body) => axios.post(url, body, { withCredentials: true }).then((result) => result.data);

export const requestSignIn = (params) => createPostRequest(`/lms/sls2/api/${params.mode}/sign-in-local`, params.body);
export const requestLearnerInfo = () => createGetRequest("/lms/sls2/api/learner/assessment/main");
export const requestLearnerProgress = (params) => createGetRequest(`/lms/sls2/api/learner/assessment/progress/M0/${params.assessment_division_code}/${params.grade_code}`);
export const requestLearnerResultReport = (params) => createGetRequest(`/lms/sls2/api/learner/result/report/${params.subject_code}/${params.assessment_division_code}/${params.grade_code}`);
export const requestLearnerMypage = () => createGetRequest("/lms/sls2/api/learner/my-page/main");
export const requestLearnerQuestionInfo = (params) => {
    const { subject_code, assessment_division_code, grade_code, question_offer_group } = params;
    return createGetRequest(`/lms/sls2/api/learner/assessment/question/${subject_code}/${assessment_division_code}/${grade_code}/${question_offer_group}/true`);
};
export const requestQuestionKeep = (params) => createPostRequest("/lms/sls2/api/learner/assessment/keep", params);
export const requestQuestionHistory = (params) => createPostRequest("/lms/sls2/api/learner/assessment/history", params);
export const requestWrongAnswerInfo = (params) => {
    const { subject_code, assessment_division_code, grade_code, learning_domain_code } = params;
    return createGetRequest(`/lms/sls2/api/learner/result/wrong-answer/${subject_code}/${assessment_division_code}/${grade_code}/${learning_domain_code}`);
};
