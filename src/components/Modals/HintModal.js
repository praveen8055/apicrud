import ReactDom from "react-dom";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./HintModal.module.css";
const HintModal = (props) => {
  if (!props.isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 z-50`}
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        onClick={props.closeHintModal}
      ></div>
      <div
        className={`fixed top-1/2 left-1/2 z-50 p-12 bg-white text-sm rounded-2xl`}
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <div className={`flex flex-col items-center`}>
          <p>The Mobile number linked to your Appearz</p>
          <p className="mb-3">account ends with **** ** 9583</p>
          <button
            className={`bg-blue-700 w-2/5 h-8 rounded-3xl text-white mb-8 ${classes.okButton}`}
            onClick={props.closeHintModal}
          >
            Okay
          </button>
          <span>
            Issue with this number?{" "}
            <Link
              onClick={props.openIssueModal}
              className={`font-bold ${classes.issueClick}`}
            >
              Click Here
            </Link>
          </span>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default HintModal;
