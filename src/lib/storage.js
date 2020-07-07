import { decrypt, encrypt } from "./security";

const REMEMBER_LOGIN_INFO = "REMEMBER_LOGIN_INFO";
const LEARNER_LOGIN_INFO = "LEARNER_LOGIN_INFO";
const TEACHER_LOGIN_IFNO = "TEACHER_LOGIN_INFO";

export const isRememberLoginInfo = () => localStorage.getItem(REMEMBER_LOGIN_INFO) === "true";
export const setRememberLoginInfo = (bool) => localStorage.setItem(REMEMBER_LOGIN_INFO, bool);

export const getLearnerLoginInfo = () => {
    const learnerInfo = localStorage.getItem(LEARNER_LOGIN_INFO);
    if (learnerInfo) return decrypt(learnerInfo);
};
export const setLearnerLoginInfo = (info) => localStorage.setItem(LEARNER_LOGIN_INFO, encrypt(info));
export const expireLearnerLoginInfo = () => localStorage.removeItem(LEARNER_LOGIN_INFO);
