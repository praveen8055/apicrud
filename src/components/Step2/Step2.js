import { React, useState } from "react";
import appearzLogo from "../../assets/apperazLogo.jpg";
import mobileImage from "../../assets/otpImage.png";
import ellipse4 from "../../assets/Ellipse4.png";
import rectangle17 from "../../assets/Rectangle17.png";
import { useHistory } from "react-router-dom";

const Step2 = () => {
  const history = useHistory();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [time, setTime] = useState(10);
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

  const goToStep3Handler = () => {
    history.push("/step3");
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
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold mb-4">Enter OTP</h1>
              <p className="mb-2 text-sm">
                Enter the one time password sent to ******9583
              </p>
              <p className="text-sm font-bold mb-4">Change Number</p>
              <div>
                {otp.map((data, index) => {
                  return (
                    <input
                      className="w-10 h-10 mr-4 mb-12 pl-5 rounded-xl"
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
              </div>
              {time > 0 && (
                <p className="text-xs font-bold mb-4">
                  Resend OTP in:{" "}
                  <span onChange={otpTimerChange()}>{time} </span>
                  <span>secs</span>
                </p>
              )}
              {time <= 0 && (
                <p className="text-xs font-bold mb-4">Resend OTP</p>
              )}
              <button
                className="bg-blue-700 w-1/2 h-8 rounded-3xl text-white text-sm mb-5"
                onClick={goToStep3Handler}
              >
                Confiirm OTP
              </button>
            </div>
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
