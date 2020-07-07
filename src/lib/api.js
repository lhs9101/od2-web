import axios from "axios";

export const createGetRequest = (url) => axios.get(url).then((result) => result.data);
export const createPostRequest = (url, body) => axios.post(url, body).then((result) => result.data);

export const requestSignIn = (params) => createPostRequest(`/lms/sls2/api/${params.mode}/sign-in-local`, params.body);
export const requestLearnerInfo = () => createGetRequest("/lms/sls2/api/learner/assessment/main");
export const requestLearnerProgress = (params) => createGetRequest(`/lms/sls2/api/learner/assessment/progress/M0/${params.assessment_division_code}/${params.grade_code}`);
