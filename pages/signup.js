import { React, useState, useRef } from "react";
// import { callApi } from "../Utilities/LoginUtils";
import styles from '../styles/Home.module.css'
import { CircularProgress } from "@material-ui/core";
// import {
//   useDispatchCurrentUser,
//   useCurrentUser,
// } from "./Contexts/CurrentUser";
import axios from "axios";
import { useRouter } from 'next/router'

function Signup() {
  var email;
  var location;
  var password;
  const router = useRouter();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const residentRef = useRef();
  const [resident, setResident] = useState("notSelected");

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  if (typeof window != "undefined") {

    email = localStorage.getItem("email");
    location = localStorage.getItem("location");
    password = localStorage.getItem("password");
  }
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    setIsFetching(true);
    if (resident === "notSelected") {
      setIsFetching(false);
      return;
    } else {
      try {
        await axios.post(
          `${process.env.SERVER_URL}/auth/local/register`,
          {
            username: usernameRef.current.value,
            email: email,
            password: password,
            apartmentNumber: emailRef.current.value,
            location: location,
            residentType: resident === "rented" ? 0 : 1,
          }
        );
        const response = await axios.post("/auth/local", {
          identifier: email,
          password: password,
        });
        dispatch({ type: "LOGIN", user: response.user });
        setIsFetching(false);
        router.replace("/login");
      } catch (err) {
        setError(err);
        setIsFetching(false);
      }
    }
  };

  const residentChangeHandler = (e) => {
    setResident(e.target.value);
  };
  console.log(resident);
  const handleSelector = (e) => {
    setResident(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-10 ml-4 flex">
          <div className={` ${styles.logoName}`}>
            <img src='/assets/logoApperaz.png' className={styles.logoImage} />
            <p className={styles.logoName1}>APPREAZ</p>
          </div>
        </div>
        <form className="flex justify-center" onSubmit={registerHandler}>
          <div
            className={`flex flex-col items-center bg-blue-50 pr-24 pb-10 pl-24 pt-8 rounded-2xl ${styles.formColor}`}
          >
            <div className="mb-14 flex flex-col items-center">
              <div className="text-sm mb-3">
                <span className="text-blue-700 text-xs font-medium">
                  STEP 4{" "}
                </span>
                <span className="text-xs text-blue-700 font-medium">of 4</span>
              </div>
              <div className="flex justify-between">
                <img className="mr-1" src='/assets/Ellipse4.png' />
                <img className="mr-1" src='/assets/Ellipse4.png' />
                <img className="mr-1" src='/assets/Ellipse4.png' />
                <img src='/assets/Rectangle17.png' />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1
                className="text-xl font-extrabold mb-4"
                style={{
                  color: "#1D1E5E",
                }}
              >
                Complete your profile
              </h1>
              <p className="mb-8 text-xs" style={{ color: "#515151" }}>
                Enter a new password for your apperaz account
              </p>
              <div className="flex flex-col justify-center">
                <label
                  htmlFor="username"
                  className="text-xs mb-2"
                  style={{ color: "#515151" }}
                >
                  Name(needs to match renter/owner documents)
                </label>
                <input
                  ref={usernameRef}
                  className="w-80 h-8 rounded-md pl-2 text-xs mb-4 outline-none"
                  name="username"
                  id="username"
                ></input>
                {error && (
                  <p className="text-xs text-red-600 mb-4">
                    Email is aleady registered
                  </p>
                )}
                <label
                  htmlFor="apartment-number"
                  className="text-xs mb-2"
                  style={{ color: "#515151" }}
                >
                  Apartment Number
                </label>
                <input
                  ref={emailRef}
                  className="w-80 h-8 rounded-md pl-2 text-xs mb-6 outline-none"
                  name="apartment-number"
                  id="apartment-number"
                  type="text"
                  required
                ></input>
              </div>
              <div className="flex flex-col mb-4 self-start items-start">
                <label
                  htmlFor="selectCategory"
                  className="text-xs mb-4"
                  style={{ color: "#515151" }}
                >
                  Resident Type
                </label>
                {/* <select
                  onChange={handleSelector}
                  className="mb-8 w-80 text-xs p-1 outline-none"
                  name="selectCategory"
                  id="selectCategory"
                >
                  <option value="rented">Rented</option>
                  <option value="owner">Owner</option>
                </select> */}
                <div
                  className="flex items-center w-40 justify-between text-xs font-medium mb-4"
                  style={{ color: "#515151" }}
                  onChange={residentChangeHandler}
                >
                  <div className="flex items-center">
                    <input
                      className="mr-1 cursor-pointer"
                      type="radio"
                      name="selectCategory"
                      value="rented"
                    />
                    Rented
                  </div>
                  <div className="flex items-center">
                    <input
                      className="mr-1 cursor-pointer"
                      type="radio"
                      name="selectCategory"
                      value="owner"
                    />
                    Owner
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={`self-center bg-blue-700 w-4/5 h-8 rounded-3xl text-white font-medium text-xs mb-4 ${styles.confirmDetailsButton}`}
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
        <div className="fixed bottom-0 right-0 w-80">
          <img src='/assets/signupImage.png' />
        </div>
      </div>
    </>
  );
};

export default Signup

