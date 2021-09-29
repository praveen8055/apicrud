import React, { useEffect, useRef, useState } from "react";
import callApi from "../Utilities/LoginUtils";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneInput from "react-phone-input-2";
import styles from '../styles/Home.module.css'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Cookies from 'js-cookie'
import fbimage from '../public/assets/fbimage.png'

// import {
//   useDispatchCurrentUser,
//   useCurrentUser,
// } from "./Contexts/CurrentUser";
import cloudImage from "../public/assets/cloudImage.png";
import logoAppreaz from "../public/assets/logoApperaz.png";
import ellipse4 from "../public/assets/Ellipse4.png";
import rectangle17 from "../public/assets/Rectangle17.png";
import googleImage from "../public/assets/googleImage.png";
import facebookImage from "../public/assets/facebookImage.png";
import { useRouter } from 'next/router'
import Image from 'next/image'
import axios from "axios";

function Login() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  // const dispatch = useDispatchCurrentUser();
  // const currentUser = useCurrentUser();
  const [image1, setImage1] = useState(rectangle17);
  const [image2, setImage2] = useState(ellipse4);
  const [image3, setImage3] = useState(ellipse4);
  const [image4, setImage4] = useState(ellipse4);
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [emailValue, setEmailValue] = useState("");
  const [phoneNo, setPhoneNo] = useState();
  const [isEmailInput, setIsEmailInput] = useState(true);

  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
  }

  const responseFacebook = (response) => {
    console.log(response);
  }
  const componentClicked = (data) => {
    console.log(data)
  }

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
    //   const re =
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   console.log("email", emailValue);
    //   console.log("password", values.password);

    //   setErrorMessage(null);
    //   try {
    //     if (!re.test(emailValue)) throw "Email not valid";
    //     const response = await callApi("/auth/local", "POST", {
    //       identifier: emailValue,
    //       password: values.password,
    //     });
    //     if (!response.user) {
    //       throw "We could not find an account linked with this account";
    //     }
    //     console.log(response);
    //     dispatch({ type: "LOGIN", user: response.user });
    //     router.replace("/dummyconfirmation");
    //   } catch (error) {
    //     console.log(error);
    //     setErrorMessage(JSON.stringify(error));
    //   }
    await
      axios.post(`${process.env.SERVER_URL}/auth/local`, { identifier: emailValue, password: values.password })
        .then(res => {
          console.log(res)
          Cookies.set("jwt", res.data.jwt)
          console.log(res.data.jwt)
          let { jwt } = res.data
          if (res) {
            window.localStorage.setItem('token', jwt)
          }
          router.push("/dashboard")
        }).catch(err => {
          console.log(err)
        })

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

      <div className={` ${styles.logoName}`}>
        <img src={logoAppreaz} className={styles.logoImage} />
        <p className={styles.logoName1}>APPREAZ</p>
      </div>
      <div className={`w-screen h-screen flex items-center ${styles.cloudbackground}`}>
        <div className={`w-1/2 flex flex-col items-center justify-center `}>
          <img className="mb-6" src={cloudImage} />
          <p>One-stop-shop for all your</p>
          <p className="mb-6 ">society-related administrative work</p>
          <div className="flex justify-between mb-6">
            <img
              className={`mr-1 ${styles.imageMove}`}
              src={image1}
              onClick={image1Handler}
            />
            <img
              className={`mr-1 ${styles.imageMove}`}
              src={image2}
              onClick={image2Handler}
            />
            <img
              className={`mr-1 ${styles.imageMove}`}
              src={image3}
              onClick={image3Handler}
            />
            <img
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
          <p
            onClick={goToStep1Handler}
            className={`absolute top-4 right-4 text-xs underline ${styles.createAccountMessage}`}
            style={{ cursor: "pointer" }}
          >
            Don&apos;t have an appereaz account?
          </p>
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
            <GoogleLogin
              clientId="607217644055-uoigtq2aubta88elvhu3n2mkae8tboea.apps.googleusercontent.com"
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}
                  className="flex items-center justify-center w-64 h-8 rounded-3xl border border-blue-700 text-blue-700 mb-8"
                >
                  <img className="mr-2 w-4 h-4" src={googleImage} />
                  <p className="text-xs font-medium pl-2">CONTINUE WITH GOOGLE</p>
                </button>
              )}
              buttonText="Continue with google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            // cookiePolicy={"single-host-origin"}
            />
            <FacebookLogin
              appId="434384707135599"
              autoLoad={true}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              render={renderProps => (
                <button onClick={renderProps.onClick} className="flex items-center justify-center w-64 h-8 rounded-3xl border border-blue-700 text-blue-700">
                  <img src={fbimage} className={styles.fbicon} />
                  <p className="text-xs font-medium pl-2 ">CONTINUE WITH FACEBOOK</p>
                </button>
              )} />
          </div>
        </div>
      </div>
    </>

  );
};


export default Login
