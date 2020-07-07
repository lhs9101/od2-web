import ReactDOM from "react-dom";
import { useEffect } from "react";

const ModalPortal = ({ children }) => {
    const el = document.getElementById("modal");
    return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
