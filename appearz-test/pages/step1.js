import { React, useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import HintModal from "./hintmodal";
import IssueModal from "./issuemodal";
// import  {callApi}  from "../Utilities/LoginUtils";
import styles from '../styles/Home.module.css';
import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import axios from "axios"
import * as Utilities from "../Utilities/utilities"

function Step1() {
  useEffect(() => {
    Utilities.isAlreadyLoggedIn().catch(error => console.error(error))
  }, [])
  const router = useRouter();
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
      const response = await axios.post(`${process.env.SERVER_URL}/verifications`, {
        phoneNumber: newValue,
      });
      localStorage.setItem("phoneNumber", newValue);
      setIsFetching(false);
      router.replace("/step2");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.background}>
      <div className={`flex flex-col justify-center ${styles.background}`}>
        <div className={`mb-24 ml-4 flex${styles.background}`}>
        <div className={` ${styles.logoName}`}>
            <img src='/assets/logoApperaz.png' className={styles.logoImage} />
        <p className={styles.logoName1}>APPREAZ</p>
      </div>
        </div>
        <div className={`flex justify-center ${styles.background}`}>
          <div
            className={`flex flex-col items-center pr-32 pb-10 pl-32 pt-8 rounded-2xl ${styles.formColor}`}
          >
            <div className="mb-16 flex flex-col items-center">
              <div className="text-sm mb-3">
                <span className={`${styles.textColor} text-xs font-medium`}>
                  STEP 1{" "}
                </span>
                <span className="opacity-50 text-xs">of 4</span>
              </div>
              <div className="flex justify-between">
                <img className="mr-1" src='/assets/Rectangle17.png' />
                <img className="mr-1" src='/assets/Ellipse4.png' />
                <img className="mr-1" src='/assets/Ellipse4.png' />
                <img src='/assets/Ellipse4.png' />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className={`text-xl font-bold ${styles.headingColor}`}>
                Please verify if the entered
              </h1>
              <h1 className={`text-xl font-bold mb-4 ${styles.headingColor}`}>
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
                className={`self-center bg-blue-700 w-2/5 h-8 rounded-3xl text-white mt-6 mb-5 text-xs font-medium ${styles.getOtpButton}`}
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
                  className={`font-bold cursor-pointer ${styles.getHintSpan}`}
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
        <div className={styles.background}>
        <div className={`absolute bottom-0 right-0 w-80 ${styles.background}`}>
            <img src='/assets/mobileImage.png' />
        </div>
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
    </div>
  );
};


export default Step1

