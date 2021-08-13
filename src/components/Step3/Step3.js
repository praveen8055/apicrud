import { React, useRef, useState } from "react";
import appearzLogo from "../../assets/apperazLogo.jpg";
import ellipse4 from "../../assets/Ellipse4.png";
import rectangle17 from "../../assets/Rectangle17.png";
import mobileImage from "../../assets/authenticationImage.png";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import classes from "./Step3.module.css";
import { useHistory } from "react-router-dom";
const Step3 = () => {
  const history = useHistory();
  const [passwordValues, setPasswordValues] = useState({
    password: "",
    showPassword: false,
  });

  const [confirmPasswordValues, setConfirmPasswordValues] = useState({
    confirmPassword: "",
    showConfirmPassword: false,
  });
  const confirmPasswordRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleClickShowPassword = () => {
    setPasswordValues({
      ...passwordValues,
      showPassword: !passwordValues.showPassword,
    });
  };

  const handlePasswordChange = (prop) => (event) => {
    setPasswordValues({
      ...passwordValues,
      [prop]: event.target.value,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setConfirmPasswordValues({
      ...confirmPasswordValues,
      showConfirmPassword: !confirmPasswordValues.showConfirmPassword,
    });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const handleConfirmPasswordChange = (prop) => (event) => {
    setConfirmPasswordValues({
      ...confirmPasswordValues,
      [prop]: event.target.value,
    });
  };

  const handleFormInput = (e) => {
    e.preventDefault();
    if (passwordValues.password !== confirmPasswordValues.confirmPassword) {
      return;
    }
    localStorage.setItem("email", emailRef.current.value);
    localStorage.setItem("password", passwordValues.password);
    history.replace("/signup");
  };

  return (
    <div className="flex flex-col">
      <div className="mb-8 ml-4">
        <img src={appearzLogo}></img>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center bg-blue-50 pr-24 pb-12 pl-24 pt-8 rounded-2xl">
          <div className="mb-10 flex flex-col items-center">
            <div className="text-sm mb-3">
              <span className="text-blue-700">Step 3 </span>
              <span className="opacity-50">of 4</span>
            </div>
            <div className="flex justify-between">
              <img className="mr-1" src={ellipse4}></img>
              <img className="mr-1" src={ellipse4}></img>
              <img className="mr-1" src={rectangle17}></img>
              <img src={ellipse4}></img>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-2 font-bold">Create Password</h1>
            <p className="text-xs mb-6">
              Enter a new password for the appereaz account
            </p>
            <form
              className="flex flex-col items-start"
              onSubmit={handleFormInput}
            >
              <label className="text-xs mb-2" htmlFor="email">
                Email ID:
              </label>
              <input
                type="email"
                ref={emailRef}
                className="w-80 h-8 rounded-md pl-2 text-xs mb-4 outline-none"
                name="email"
                id="email"
                required
              ></input>
              <label className="text-xs mb-2" htmlFor="new-password">
                New Password:
              </label>
              {/* <input
                type="password"
                className="w-80 h-8 rounded-md pl-2 mb-2"
                name="new-password"
                id="new-password"
              ></input> */}
              <Input
                className="w-80 h-8 rounded-md pl-2 text-sm mb-2 bg-white no-underline"
                type={passwordValues.showPassword ? "text" : "password"}
                disableUnderline={true}
                onChange={handlePasswordChange("password")}
                style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
                ref={passwordRef}
                value={passwordValues.password}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {passwordValues.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <div className="flex flex-col items-start text-xs">
                <p>should contain at least 8 characters</p>
                <p className="mb-4">should contain a number</p>
              </div>
              <label className="text-xs mb-2" htmlFor="confirm-password">
                Confirm Password:
              </label>
              <Input
                className="w-80 h-8 rounded-md pl-2 text-sm mb-8 bg-white no-underline"
                type={
                  confirmPasswordValues.showConfirmPassword
                    ? "text"
                    : "password"
                }
                disableUnderline={true}
                onChange={handleConfirmPasswordChange("confirmPassword")}
                style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
                ref={confirmPasswordRef}
                value={confirmPasswordValues.confirmPassword}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                    >
                      {confirmPasswordValues.showConfirmPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <button
                className={`self-center bg-blue-700 w-3/4 h-8 rounded-3xl text-white text-sm mb-5 ${classes.createPasswordButton}`}
              >
                Create Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0">
        <img src={mobileImage}></img>
      </div>
    </div>
  );
};
export default Step3;
