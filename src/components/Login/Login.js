import React, { useRef, useState } from "react";
import { callApi } from "../../ApiUtils/LoginUtils";
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
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatchCurrentUser();
  const currentUser = useCurrentUser();

  const submitLoginFormHandler = async (e) => {
    e.preventDefault();
    console.log("email", emailRef.current.value);
    console.log("password", passwordRef.current.value);
    setErrorMessage(null);
    try {
      const response = await callApi("/auth/local", "POST", {
        identifier: emailRef.current.value,
        password: passwordRef.current.value,
      });
      if (!response.user) {
        throw "We could not find an account linked with this account";
      }
      console.log(response);
      dispatch({ type: "LOGIN", user: response.user });
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <>
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
            <input
              ref={emailRef}
              className="w-80 h-8 rounded-md pl-2 text-sm mb-2"
              name="email"
              id="email"
            ></input>
            {errorMessage && (
              <p className="text-xs text-red-600 mb-4">{errorMessage}</p>
            )}
            {currentUser.isAuthenticated && <p>Logged in Sucessfully</p>}
            <label htmlFor="password" className="text-xs mb-2">
              Password
            </label>
            <input
              ref={passwordRef}
              className="w-80 h-8 rounded-md pl-2 mb-6"
              type="password"
              name="password"
              id="password"
            ></input>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className="bg-blue-700 w-60 h-8 rounded-3xl text-white mb-5"
              onClick={submitLoginFormHandler}
            >
              Login
            </button>
            <p className="mb-4 text-sm">OR</p>
            <button className="flex items-center justify-center w-60 h-8 rounded-3xl border border-blue-700 text-blue-700 mb-6">
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
