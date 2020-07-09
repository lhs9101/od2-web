import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getLearnerMypage } from "../../modules/learnerMypage";
import Loading from "../../components/common/Loading";
import { theme } from "../../styles/globalStyle";
import { dateFormat } from "../../lib/util";
import LoginInfoCard from "../../components/learner/mypage/LoginInfoCard";
import Dropdown from "../../components/common/Dropdown";
import CollapseCard from "../../components/learner/mypage/CollapseCard";
import Dialog from "../../components/common/Dialog";
import { useHistory } from "react-router-dom";
import { signOutRequest } from "../../modules";
const Block = styled.div`
    max-width: 500px;
    padding: 15px;
    margin: auto;
    .row1 {
        color: ${theme.colors.gray[3]};
    }
    .row2 {
        display: flex;
        position: relative;
        align-items: center;
        height: 30px;
        div {
            position: absolute;
            left: 0;
            font-size: 24px;
        }
        span {
            position: absolute;
            right: 0;
            cursor: pointer;
            color: ${theme.colors.blue[2]};
            &:hover {
                text-decoration: underline ${theme.colors.blue[2]};
            }
        }
    }
    .row3 {
        display: flex;
        position: relative;
        align-items: center;
        height: 30px;
        font-size: 13px;
        color: ${theme.colors.gray[3]};
        div {
            position: absolute;
            &:first-child {
                left: 0;
            }
            &:nth-child(2) {
                right: 0;
            }
            .date {
                color: ${theme.colors.black[0]};
            }
        }
    }
    .row4 {
        margin-top: 30px;
        display: flex;
        .title {
            flex-grow: 1;
            font-size: 20px;
        }
    }
    .card-container {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;
const learnerGrades = ["미취학", "초1", "초2", "초3", "초4", "초5", "초6", "중1", "중2", "중3", "고1", "고2", "고3"];
function getFaqCategory(data) {
    return ["전체"].concat(data.map((el) => el.faq_category_name).filter((el, i, arr) => arr.indexOf(el) === i));
}
export default function MypageMain() {
    const history = useHistory();
    const { data } = useSelector((state) => state.learnerMypage);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLearnerMypage());
    }, [dispatch]);
    const [faqCategoryName, setFaqCategoryName] = useState("전체");
    const [openCardIndex, setOpenCardIndex] = useState(null);
    const [dialog, setDialog] = useState(false);
    const onFaqCategorySelect = (index, name) => setFaqCategoryName(name);
    const filteredData = useMemo(() => {
        if (!data) return [];
        if (faqCategoryName === "전체") return data.faqs;
        return data.faqs.filter((el) => el.faq_category_name === faqCategoryName);
    }, [data, faqCategoryName]);
    const handleCardClick = (index) => {
        if (openCardIndex === index) setOpenCardIndex(null);
        else setOpenCardIndex(index);
    };
    const handleLogout = () => setDialog(true);
    const handleDialogClose = () => setDialog(false);
    const goLogout = () => {
        dispatch(signOutRequest());
        history.push("/");
    };
    if (data)
        return (
            <Block>
                <div className="row1">{learnerGrades[Number(data.learner_info.school_division_code)]}</div>
                <div className="row2">
                    <div>{data.learner_info.display_name}</div>
                    <span onClick={handleLogout}>로그아웃</span>
                </div>
                <div className="row3">
                    <div>
                        <span>생년월일&nbsp;</span>
                        <span className="date">{dateFormat(data.learner_info.birth_date)}</span>
                    </div>
                    <div>
                        <span>등록일&nbsp;</span>
                        <span className="date">{dateFormat(data.learner_info.profile_date)}</span>
                    </div>
                </div>
                <div className="card-container">
                    <LoginInfoCard profileId={data.learner_info.profile_id} pinNumber={data.learner_info.pin_number} />
                </div>
                <div className="row4">
                    <span className="title">자주하는 질문</span>
                    <Dropdown placeHolder="전체" menus={getFaqCategory(data.faqs)} onSelect={onFaqCategorySelect} />
                </div>
                <div>
                    {filteredData.map((el, i) => (
                        <CollapseCard key={el.question} open={i === openCardIndex} question={el.question} answer={el.answer} onClick={() => handleCardClick(i)} />
                    ))}
                </div>
                {dialog && <Dialog onClose={handleDialogClose} onYes={goLogout} />}
            </Block>
        );
    else {
        return <Loading />;
    }
}
