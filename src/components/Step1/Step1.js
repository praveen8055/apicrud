import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import appearzLogo from "../../assets/apperazLogo.jpg";
import mobileImage from "../../assets/mobileImage.png";
import ellipse4 from "../../assets/Ellipse4.png";
import rectangle17 from "../../assets/Rectangle17.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import HintModal from "../Modals/HintModal";
import IssueModal from "../Modals/IssueModal";

const Step1 = () => {
  const history = useHistory();
  const [value, setValue] = useState();
  const [hintModalIsOpen, setHintModalIsOpen] = useState(false);
  const [issueModalIsOpen, setIssueModalIsOpen] = useState(false);

  const issueModalOpenerHandler = () => {
    setHintModalIsOpen(false);
    setIssueModalIsOpen(true);
  };

  const goToStep2Handler = () => {
    history.push("/step2");
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="mb-8 ml-4">
          <img src={appearzLogo}></img>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center bg-blue-50 pr-24 pb-24 pl-24 pt-8 rounded-2xl">
            <div className="mb-10 flex flex-col items-center">
              <div className="text-sm mb-3">
                <span className="text-blue-700">Step 1 </span>
                <span className="opacity-50">of 4</span>
              </div>
              <div className="flex justify-between">
                <img className="mr-1" src={rectangle17}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img src={ellipse4}></img>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-bold">
                Please Verify if the entered
              </h1>
              <h1 className="text-xl font-bold mb-4">number is correct</h1>
              <p className="text-sm">This number needs to match the number</p>
              <p className="mb-4 text-sm">registered in your society</p>
              <PhoneInput
                className="react-tel"
                placeholder="Enter phone number"
                country={"in"}
                value={value}
                onChange={setValue}
              />
              <button
                className="bg-blue-700 w-2/5 h-8 rounded-3xl text-white mb-5"
                onClick={goToStep2Handler}
              >
                Get Otp
              </button>
              <span className="text-sm">
                Need help with your number?{" "}
                <Link
                  className="font-bold"
                  onClick={() => {
                    setHintModalIsOpen(true);
                  }}
                >
                  Get hint.
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0">
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
