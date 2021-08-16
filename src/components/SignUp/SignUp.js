import { React, useState, useRef } from "react";
import appearzLogo from "../../assets/apperazLogo.jpg";
import signupImage from "../../assets/signupImage.png";
import ellipse4 from "../../assets/Ellipse4.png";
import rectangle17 from "../../assets/Rectangle17.png";
import { useHistory } from "react-router-dom";
import { callApi } from "../../ApiUtils/LoginUtils";
import classes from "./Signup.module.css";
import { CircularProgress } from "@material-ui/core";
import {
  useDispatchCurrentUser,
  useCurrentUser,
} from "../../Contexts/CurrentUser";
import axios from "axios";
const SignUp = () => {
  const history = useHistory();
  const usernameRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatchCurrentUser();
  const passwordRef = useRef();
  const [resident, setResident] = useState("rented");
  const password = localStorage.getItem("password");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const email = localStorage.getItem("email");
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    setIsFetching(true);
    try {
      await axios.post("http://appearz.outshade.com:1337/auth/local/register", {
        username: usernameRef.current.value,
        email: email,
        password: password,
        apartmentNumber: emailRef.current.value,
        residentType: resident === "rented" ? 0 : 1,
      });
      const response = await callApi("/auth/local", "POST", {
        identifier: email,
        password: password,
      });
      dispatch({ type: "LOGIN", user: response.user });
      setIsFetching(false);
      history.replace("/confirmation");
    } catch (err) {
      setError(err);
      setIsFetching(false);
    }
  };
  const handleSelector = (e) => {
    setResident(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-8 ml-4">
          <img src={appearzLogo}></img>
        </div>
        <form className="flex justify-center" onSubmit={registerHandler}>
          <div className="flex flex-col items-center bg-blue-50 pr-24 pb-10 pl-24 pt-8 rounded-2xl">
            <div className="mb-10 flex flex-col items-center">
              <div className="text-sm mb-3">
                <span className="text-blue-700">Step 4 </span>
                <span className="opacity-50">of 4</span>
              </div>
              <div className="flex justify-between">
                <img className="mr-1" src={ellipse4}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img className="mr-1" src={ellipse4}></img>
                <img src={rectangle17}></img>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold mb-4">Complete your Profile</h1>
              <p className="mb-8 text-xs">
                Enter a new password for your apperaz account
              </p>
              <div className="flex flex-col justify-center">
                <label htmlFor="username" className="text-xs mb-2">
                  Name(needs to match renter/owner documents)
                </label>
                <input
                  ref={usernameRef}
                  className="w-80 h-8 rounded-md pl-2 text-xs mb-2 outline-none"
                  name="username"
                  id="username"
                ></input>
                {error && (
                  <p className="text-xs text-red-600 mb-4">
                    Email is aleady registered
                  </p>
                )}
                <label htmlFor="apartment-number" className="text-xs mb-2">
                  Apartment Number
                </label>
                <input
                  ref={emailRef}
                  className="w-80 h-8 rounded-md pl-2 text-xs mb-2 outline-none"
                  name="apartment-number"
                  id="apartment-number"
                  type="text"
                  required
                ></input>
              </div>
              <div className="flex flex-col justify-center">
                <label htmlFor="selectCategory" className="text-xs mb-2">
                  Resident Type
                </label>
                <select
                  onChange={handleSelector}
                  className="mb-8 w-60 text-sm p-1 outline-none"
                  name="selectCategory"
                  id="selectCategory"
                >
                  <option value="rented">Rented</option>
                  <option value="owner">Owner</option>
                </select>
              </div>
              <button
                type="submit"
                className={`self-center bg-blue-700 w-3/5 h-8 rounded-3xl text-white font-semibold text-xs mb-5 ${classes.confirmDetailsButton}`}
              >
                {isFetching ? (
                  <CircularProgress
                    color="white"
                    size="20px"
                  ></CircularProgress>
                ) : (
                  "CONFIRM DETAILS"
                )}
              </button>
              <p className="text-xs">
                Incorrect Details? <span className="font-bold">Click here</span>
              </p>
            </div>
          </div>
        </form>
        <div className="fixed bottom-0 right-0">
          <img src={signupImage}></img>
        </div>
      </div>
    </>
  );
};
export default SignUp;
