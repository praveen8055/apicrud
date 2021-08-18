import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import appearzLogo from "../../assets/apperazLogo.jpg";
import logoAppearz from "../../assets/logoApperaz.png";
import mobileImage from "../../assets/mobileImage.png";
import ellipse4 from "../../assets/Ellipse4.png";
import rectangle17 from "../../assets/Rectangle17.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import HintModal from "../Modals/HintModal";
import IssueModal from "../Modals/IssueModal";
import { callApi } from "../../ApiUtils/LoginUtils";
import classes from "./Step1.module.css";
import { CircularProgress } from "@material-ui/core";

const Step1 = () => {
  const history = useHistory();
  const [value, setValue] = useState();
  const [hintModalIsOpen, setHintModalIsOpen] = useState(false);
  const [issueModalIsOpen, setIssueModalIsOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const issueModalOpenerHandler = () => {
    setHintModalIsOpen(false);
    setIssueModalIsOpen(true);
  };

  const goToStep2Handler = async () => {
    var newValue = "+" + value;
    setIsFetching(true);
    if (newValue.length !== 13) {
      setError("The entered number is not valid");
      setIsFetching(false);
      return;
    }
    try {
      const response = await callApi("/verifications", "POST", {
        phoneNumber: newValue,
      });
      localStorage.setItem("phoneNumber", newValue);
      setIsFetching(false);
      history.replace("/step2");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="mb-24 ml-4 flex">
          <img src={logoAppearz}></img>
          <p className={`self-end ${classes.logoName}`}>APPREAZ</p>
        </div>
        <div className="flex justify-center">
          <div
            className={`flex flex-col items-center pr-32 pb-10 pl-32 pt-8 rounded-2xl ${classes.formColor}`}
          >
            <div className="mb-16 flex flex-col items-center">
              <div className="text-sm mb-3">
                <span className={`${classes.textColor} text-xs font-medium`}>
                  STEP 1{" "}
                </span>
                <span className="opacity-50 text-xs">of 4</span>
              </div>
              <div className="flex justify-between">
                <img className="mr-1" src={rectangle17}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img src={ellipse4}></img>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className={`text-xl font-bold ${classes.headingColor}`}>
                Please verify if the entered
              </h1>
              <h1 className={`text-xl font-bold mb-4 ${classes.headingColor}`}>
                number is correct
              </h1>
              <p className="text-xs" style={{ color: "#515151" }}>
                This number needs to match the number
              </p>
              <p className={`mb-4 text-xs`} style={{ color: "#515151" }}>
                registered in your society
              </p>
              <PhoneInput
                className="react-tel"
                placeholder="Enter phone number"
                country={"in"}
                value={value}
                onChange={setValue}
              />
              {error && <p className="text-xs text-red-600">{error}</p>}
              <button
                className={`self-center bg-blue-700 w-2/5 h-8 rounded-3xl text-white mt-6 mb-5 text-xs font-medium ${classes.getOtpButton}`}
                onClick={goToStep2Handler}
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress
                    color="white"
                    size="20px"
                    className="self-center"
                  />
                ) : (
                  "GET OTP"
                )}
              </button>
              <span className="text-xs">
                Need help with your number?{" "}
                <span
                  className={`font-bold cursor-pointer ${classes.getHintSpan}`}
                  onClick={() => {
                    setHintModalIsOpen(true);
                  }}
                >
                  Get hint.
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-80">
          <img src={mobileImage}></img>
        </div>
      </div>
      <HintModal
        isOpen={hintModalIsOpen}
        closeHintModal={() => {
          setHintModalIsOpen(false);
        }}
        openIssueModal={issueModalOpenerHandler}
      ></HintModal>
      <IssueModal
        isOpen={issueModalIsOpen}
        closeIssueModal={() => {
          setIssueModalIsOpen(false);
        }}
      ></IssueModal>
    </>
  );
};
export default Step1;
