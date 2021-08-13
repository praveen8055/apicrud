import { React, useState } from "react";
import appearzLogo from "../../assets/apperazLogo.jpg";
import mobileImage from "../../assets/otpImage.png";
import ellipse4 from "../../assets/Ellipse4.png";
import rectangle17 from "../../assets/Rectangle17.png";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import classes from "./Step2.module.css";

const Step2 = () => {
  const history = useHistory();
  const number = localStorage.getItem("phoneNumber");
  console.log(number);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [time, setTime] = useState(10);
  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const handleOtpInputChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx == index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const otpTimerChange = () => {
    setTimeout(() => {
      var reducedTime = time - 1;
      if (reducedTime <= 0) setTime(0);
      else setTime(reducedTime);
    }, 1000);
  };

  const goToStep3Handler = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    var totalOtp = "";
    for (var i = 0; i < otp.length; i++) {
      totalOtp = totalOtp + otp[i];
    }
    console.log(totalOtp);
    try {
      const response = await axios.post("http://localhost:1337/approvals", {
        phoneNumber: number,
        code: totalOtp,
      });
      console.log(response.data);
      const message = response.data;
      if (message === "User Not Approved") {
        setIsFetching(false);
        setError(true);
      } else {
        setIsFetching(false);
        history.replace("/step3");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeNumberHandler = () => {
    history.replace("/step1");
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
                <span className="text-blue-700">Step 2 </span>
                <span className="opacity-50">of 4</span>
              </div>
              <div className="flex justify-between">
                <img className="mr-1" src={ellipse4}></img>
                <img className="mr-1" src={rectangle17}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img src={ellipse4}></img>
              </div>
            </div>
            <form
              className="flex flex-col justify-center items-center"
              onSubmit={goToStep3Handler}
            >
              <h1 className="text-xl font-bold mb-4">Enter OTP</h1>
              <p className="mb-2 text-sm">
                Enter the one time password sent to ******
                {number[9] + number[10] + number[11] + number[12]}
              </p>
              <p
                className={`text-sm font-bold mb-4 cursor-pointer ${classes.changeNumberSpan}`}
                onClick={changeNumberHandler}
              >
                Change Number
              </p>
              <div>
                {otp.map((data, index) => {
                  return (
                    <input
                      className="w-10 h-10 mr-4 mb-4 pl-5 rounded-xl"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleOtpInputChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
                {error && (
                  <div className="mb-10 font-bold text-sm">
                    <span className="text-red-600">Incorrect OTP : </span>
                    <span>Try Again! Only 3 attempts left</span>
                  </div>
                )}
              </div>
              {time > 0 && (
                <p className="text-xs font-bold mb-4">
                  Resend OTP in:{" "}
                  <span onChange={otpTimerChange()}>{time} </span>
                  <span>secs</span>
                </p>
              )}
              {time <= 0 && (
                <p
                  className={`text-xs font-bold mb-4 cursor-pointer ${classes.resendOtp}`}
                >
                  Resend OTP
                </p>
              )}
              <button
                type="submit"
                className={`self-center bg-blue-700 w-1/2 h-8 rounded-3xl text-white text-sm mb-5 ${classes.confirmOtpButton}`}
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Get OTP"
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="fixed bottom-0 right-0">
          <img src={mobileImage}></img>
        </div>
      </div>
    </>
  );
};
export default Step2;
