import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLearnerInfo, getLearnerProgress, getLearnerResult } from "../../modules/learnerAssessment";

export default function useLearnerInfo({ needProgress = false, needResult = false }) {
    const { learnerInfo, progressInfo, resultInfo } = useSelector((state) => state.learnerAssessment);
    const dispatch = useDispatch();
    useEffect(() => {
        if (learnerInfo.data) return;
        dispatch(getLearnerInfo());
    }, [dispatch, learnerInfo.data]);
    useEffect(() => {
        if (learnerInfo.data && needProgress) dispatch(getLearnerProgress(learnerInfo.data[0]));
    }, [dispatch, learnerInfo.data, needProgress]);
    useEffect(() => {
        if (learnerInfo.data && needResult) dispatch(getLearnerResult(learnerInfo.data[0]));
    }, [dispatch, learnerInfo.data, needResult]);
    return { learnerInfo, progressInfo, resultInfo };
}
