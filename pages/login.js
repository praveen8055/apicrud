import React, { useEffect, useRef, useState } from "react";
import  callApi  from "./Api/LoginUtils";
import {Visibility} from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneInput from "react-phone-input-2";
import styles from '../styles/Home.module.css'

import {
  useDispatchCurrentUser,
  useCurrentUser,
} from "./Contexts/CurrentUser";
import cloudImage from "../public/assets/cloudImage.png";
import logoAppreaz from "../public/assets/logoApperaz.png";
import ellipse4 from "../public/assets/Ellipse4.png";
import rectangle17 from "../public/assets/Rectangle17.png";
import googleImage from "../public/assets/googleImage.png";
import facebookImage from "../public/assets/facebookImage.png";
import { useRouter } from 'next/router'
import Image from 'next/image'

function login() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatchCurrentUser();
  const currentUser = useCurrentUser();
  const [image1, setImage1] = useState(rectangle17);
  const [image2, setImage2] = useState(ellipse4);
  const [image3, setImage3] = useState(ellipse4);
  const [image4, setImage4] = useState(ellipse4);
  const [values, setValues] = useState([{
    password: "",
    showPassword: false,
  }]);
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
      // dispatch({ type: "LOGIN", user: response.user });
      router.replace("/dummyconfirmation");
    } catch (error) {
      console.log(error);
      setErrorMessage("incorrect email");
    }
  };

  const image1Handler = () => {
    setImage1(rectangle17);
    setImage2(ellipse4);
    setImage3(ellipse4);
    setImage4(ellipse4);
  };
  const image2Handler = () => {
    setImage1(ellipse4);
    setImage2(rectangle17);
    setImage3(ellipse4);
    setImage4(ellipse4);
  };
  const image3Handler = () => {
    setImage1(ellipse4);
    setImage2(ellipse4);
    setImage3(rectangle17);
    setImage4(ellipse4);
  };
  const image4Handler = () => {
    setImage1(ellipse4);
    setImage2(ellipse4);
    setImage3(ellipse4);
    setImage4(rectangle17);
  };
  // const logoutHandler = async () => {
  //   await callApi("/logout", "POST");
  //   dispatch({ type: "LOGOUT" });
  // };

  const loginWithGoogleHandler = () => {
    window.location = "http://localhost:1337/connect/google";
  };
  const goToStep1Handler = () => {
    router.push("/getStarted");
  };

  return (
    <>
      <p
        onClick={goToStep1Handler}
        className={`absolute top-4 right-4 text-xs underline ${styles.createAccountMessage}`}
        style={{ cursor: "pointer" }}
      >
        Don't have an appereaz account?
      </p>
      <div>
        <Image src={logoAppreaz} className="absolute top-0 left-0"/>
        <p className={`absolute top-6 left-12 ${styles.logoName}`}>APPREAZ</p>
      </div>
      <div className="w-screen h-screen flex items-center">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image className="mb-6" src={cloudImage}/>
          <p>One-stop-shop for all your</p>
          <p className="mb-6">society-related administrative work</p>
          <div className="flex justify-between mb-6">
            <Image
              className={`mr-1 ${styles.imageMove}`}
              src={image1}
              onClick={image1Handler}
            />
            <Image
              className={`mr-1 ${styles.imageMove}`}
              src={image2}
              onClick={image2Handler}
            />
              <Image
              className={`mr-1 ${styles.imageMove}`}
              src={image3}
              onClick={image3Handler}
            />
            <Image
              className={styles.imageMove}
              src={image4}
              onClick={image4Handler}
            />
          </div>
          <button
            className={`w-1/4 h-8 rounded-3xl text-white mb-5 text-sm font-medium ${styles.cloudButton}`}
          >
            WATCH VIDEO
          </button>
        </div>
        <div
          className={`w-1/2 h-screen flex flex-col items-center justify-center ${styles.backgroundLoginColor}`}
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-extrabold mb-6">Log In</h1>
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
              className="w-80 h-8 rounded-md pl-2 text-sm mb-6 bg-white no-underline"
              ref={emailRef}
              value={emailValue}
              onChange={emailChangedHandler}
              type="email"
              name="email"
              id="email"
              required
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
              className="w-80 h-8 rounded-md pl-2 text-sm mb-3 bg-white no-underline"
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
          <div className="flex items-center justify-between w-5/12">
            <p className="text-xs mb-8">Forgot Password</p>
            {/* <p>error Message</p> */}
          </div>

          <div className="flex flex-col items-center">
            <button
              className={`w-60 h-8 rounded-3xl text-white mb-6 font-medium ${styles.loginButton}`}
              onClick={submitLoginFormHandler}
            >
              LOGIN
            </button>
            <p className="mb-6 text-sm">OR</p>
            <button
              onClick={loginWithGoogleHandler}
              className="flex items-center justify-center w-64 h-8 rounded-3xl border border-blue-700 text-blue-700 mb-8"
            >
              <Image className="mr-2 w-4 h-4" src={googleImage}/>
              <p className="text-xs font-medium">CONTINUE WITH GOOGLE</p>
            </button>
            <button className="flex items-center justify-center w-64 h-8 rounded-3xl border border-blue-700 text-blue-700">
              <Image className="mr-2 w-5 h-5" src={facebookImage}/>
              <p className="text-xs font-medium">CONTINUE WITH FACEBOOK</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default login
