import { React, useRef, useState, useEffect } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
import * as Utilities from "../Utilities/utilities"

function Step3() {
  useEffect(() => {
    Utilities.isAlreadyLoggedIn().catch(error => console.error(error))
}, [])
  const router = useRouter();
  const [passwordValues, setPasswordValues] = useState({
    password: "",
    showPassword: false,
  });
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [error, setError] = useState(null);

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
    setError(null);
    setPasswordValues({
      ...passwordValues,
      [prop]: event.target.value,
    });
    if (event.target.value.length >= 8) {
      setCheck1(true);
    } else {
      setCheck1(false);
    }
    const regex = /\d/;
    if (regex.test(event.target.value)) {
      setCheck2(true);
    } else {
      setCheck2(false);
    }
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
      setError("Passwords do not match!");
      return;
    }
    localStorage.setItem("email", emailRef.current.value);
    localStorage.setItem("password", passwordValues.password);
    router.replace("/signup");
  };

  return (
    <div className="flex flex-col">
      <div className="mb-10 ml-4 flex">
      <div className={` ${styles.logoName}`}>
          <img src='/assets/logoApperaz.png' className={styles.logoImage} />
        <p className={styles.logoName1}>APPREAZ</p>
      </div>
      </div>
      <div className="flex justify-center">
        <div
          className={`flex flex-col items-center  pr-24 pb-4 pl-24 pt-8 rounded-2xl ${styles.formColor}`}
        >
          <div className="mb-10 flex flex-col items-center">
            <div className="text-sm mb-3">
              <span className="text-blue-700 text-xs font-medium">STEP 3 </span>
              <span className="opacity-50 text-xs">of 4</span>
            </div>
            <div className="flex justify-between">
              <img className="mr-1" src='/assets/Ellipse4.png' />
              <img className="mr-1" src='/assets/Ellipse4.png' />
              <img className="mr-1" src='/assets/Rectangle17.png' />
              <img src='/assets/Ellipse4.png' />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className={`mb-4 text-xl font-bold ${styles.headingColor}`}>
              Create Password
            </h1>
            <p className="text-xs mb-8" style={{ color: "#515151" }}>
              Enter a new password for the appereaz account
            </p>
            <form
              className="flex flex-col items-start"
              onSubmit={handleFormInput}
            >
              <label
                className="text-xs mb-2"
                htmlFor="email"
                style={{ color: "#515151" }}
              >
                Email ID:
              </label>
              <input
                type="email"
                ref={emailRef}
                className="w-80 h-8 rounded-md pl-2 text-xs mb-10 outline-none"
                name="email"
                id="email"
                required
              ></input>
              <label
                className="text-xs mb-2"
                htmlFor="new-password"
                style={{ color: "#515151" }}
              >
                New Password:
              </label>
              {/* <input
                type="password"
                className="w-80 h-8 rounded-md pl-2 mb-2"
                name="new-password"
                id="new-password"
              ></input> */}
              <Input
                className="w-80 h-8 rounded-md pl-2 text-sm mb-4 bg-white no-underline"
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
              {error && (
                <p className="text-red-500 text-xs mb-4">
                  Passwords do not match
                </p>
              )}
              <div className="flex flex-col items-start text-xs">
                <div className="flex items-center mb-4">
                  {!check1 && (
                    <img src='/assets/incorrect.png' className="mr-1 w-4 h-4" />
                  )}
                  {check1 && <img src='/assets/correct.png' className="mr-1 w-4 h-4" />}
                  <p style={{ color: "#515151" }}>
                    should contain at least 8 characters
                  </p>
                </div>
                <div className="flex items-center justify-center mb-6">
                  {!check2 && (
                    <img src='/assets/incorrect.png' className="mr-1 w-4 h-4" />
                  )}
                  {check2 && <img src='/assets/correct.png' className="mr-1 w-4 h-4" />}
                  <p style={{ color: "#515151" }}>should contain a number</p>
                </div>
              </div>
              <label
                className="text-xs mb-2"
                htmlFor="confirm-password"
                style={{ color: "#515151" }}
              >
                Confirm New Password:
              </label>
              <Input
                className="w-80 h-8 rounded-md pl-2 text-sm mb-10 bg-white no-underline"
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
                disabled={check1 && check2 ? false : true}
                className={`self-center bg-blue-700 w-3/4 h-8 rounded-3xl text-white text-xs font-medium mb-5 ${styles.createPasswordButton}`}
              >
                CREATE PASSWORD
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-80">
        <img src='/assets/authenticationImage.png' />
      </div>
    </div>
  );
};


export default Step3
