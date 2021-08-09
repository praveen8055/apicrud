import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { callApi } from "../../ApiUtils/LoginUtils";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneInput from "react-phone-input-2";
import {
  useDispatchCurrentUser,
  useCurrentUser,
} from "../../Contexts/CurrentUser";
import cloudImage from "../../assets/cloudImage.png";
import apperazLogo from "../../assets/apperazLogo.jpg";
import ellipse4 from "../../assets/Ellipse4.png";
import rectangle17 from "../../assets/Rectangle17.png";
import googleImage from "../../assets/googleImage.png";
import facebookImage from "../../assets/facebookImage.png";
const Login = () => {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatchCurrentUser();
  const currentUser = useCurrentUser();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [emailValue, setEmailValue] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [isEmailInput, setIsEmailInput] = useState(true);

  const emailChangedHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitLoginFormHandler = async (e) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("email", emailValue);
    console.log("password", values.password);

    setErrorMessage(null);
    try {
      if (!re.test(emailValue)) throw "Email not valid";
      const response = await callApi("/auth/local", "POST", {
        identifier: emailValue,
        password: values.password,
      });
      if (!response.user) {
        throw "We could not find an account linked with this account";
      }
      console.log(response);
      dispatch({ type: "LOGIN", user: response.user });
      history.replace("/confirmation");
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };

  // const logoutHandler = async () => {
  //   await callApi("/logout", "POST");
  //   dispatch({ type: "LOGOUT" });
  // };

  const loginWithGoogleHandler = () => {
    window.location = "http://localhost:1337/connect/google";
  };
  const goToStep1Handler = () => {
    history.push("/step1");
  };

  return (
    <>
      <p
        onClick={goToStep1Handler}
        className="absolute top-4 right-4 text-xs underline"
        style={{ cursor: "pointer" }}
      >
        Don't have an appereaz account?
      </p>
      <img src={apperazLogo} className="absolute top-0 left-0"></img>
      <div className="w-screen h-screen flex items-center">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <img className="mb-6" src={cloudImage}></img>
          <p>One-stop-shop for all your</p>
          <p className="mb-6">society-related administrative work</p>
          <div className="flex justify-between mb-6">
            <img className="mr-1" src={rectangle17}></img>
            <img className="mr-1" src={ellipse4}></img>
            <img className="mr-1" src={ellipse4}></img>
            <img src={ellipse4}></img>
          </div>
          <button className="bg-blue-700 w-1/4 h-8 rounded-3xl text-white mb-5">
            Watch Video
          </button>
        </div>
        <div className="w-1/2 h-screen bg-blue-50 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold mb-4">Log In</h1>
            <label htmlFor="email" className="text-xs mb-2">
              Email ID or Mobile Number
            </label>
            {/* <input
              ref={emailRef}
              className="w-80 h-8 rounded-md pl-2 text-sm mb-2"
              name="email"
              id="email"
            >
            </input> */}
            <Input
              className="w-80 h-8 rounded-md pl-2 text-sm mb-2 bg-white no-underline"
              ref={emailRef}
              value={emailValue}
              onChange={emailChangedHandler}
              type="email"
              name="email"
              id="email"
              style={{ fontSize: "0.875rem" }}
              disableUnderline={true}
            />
            {/* <PhoneInput
              className="react-tel"
              placeholder="Enter phone number"
              country={"in"}
              value={phoneNo}
              onChange={setPhoneNo}
            /> */}
            {errorMessage && (
              <p className="text-xs text-red-600 mb-4">{errorMessage}</p>
            )}
            <label htmlFor="password" className="text-xs mb-2">
              Password
            </label>
            {/* <input
              ref={passwordRef}
              className="w-80 h-8 rounded-md pl-2 mb-6"
              type="password"
              name="password"
              id="password"
            ></input> */}
            <Input
              className="w-80 h-8 rounded-md pl-2 text-sm mb-2 bg-white no-underline"
              type={values.showPassword ? "text" : "password"}
              disableUnderline={true}
              onChange={handlePasswordChange("password")}
              style={{ fontSize: "0.875rem" }}
              ref={passwordRef}
              value={values.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="flex justify-between w-2/5">
            {/* <p className="text-xs text-red-600 mb-4">Incorrect password</p> */}
            <p className="text-xs mb-4 cursor-pointer">Forgot password</p>
          </div>
          <div className="flex flex-col items-center">
            <button
              className="bg-blue-700 w-60 h-8 rounded-3xl text-white mb-5"
              onClick={submitLoginFormHandler}
            >
              Login
            </button>
            <p className="mb-4 text-sm">OR</p>
            <button
              onClick={loginWithGoogleHandler}
              className="flex items-center justify-center w-60 h-8 rounded-3xl border border-blue-700 text-blue-700 mb-6"
            >
              <img className="mr-2 w-6 h-6" src={googleImage}></img>
              <p>Continue with Google</p>
            </button>
            <button className="flex items-center justify-center w-60 h-8 rounded-3xl border border-blue-700 text-blue-700">
              <img className="mr-2 w-6 h-6" src={facebookImage}></img>
              <p>Continue with Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
