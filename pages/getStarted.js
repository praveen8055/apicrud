import React from 'react'
import getStartedImage from "../public/assets/getStartedImage.png";
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import { useRef } from "react";


function About() {
  const router=useRouter()
  const locationRef = useRef();
  const goToStep1=(e)=>{
    e.preventDefault()
    console.log(locationRef.current.value);
    if(typeof window!="undefined"){
      localStorage.setItem("location", locationRef.current.value);
      router.push("/step1");}
  }
  

  return(
  <div className={` flex flex-col items-center  ${styles.background}`}>
  <div className="flex flex-col w-full m-10 items-center">
    <h1 className={`text-3xl mb-4 ${styles.logoFamily}`}>
      <span>Welcome to </span>
      <span className={`font-semibold ${styles.logoColor}`}>APPREAZ</span>
    </h1>
    <p className="mb-6">
      <span>Your </span>
      <span className="font-bold">one stop </span>
      <span>destination for </span>
      <span className="font-bold">all your society needs</span>
    </p>
    <form
      className="flex flex-col items-center w-full"
      onSubmit={goToStep1}
    >
      <input
        className="w-4/12 h-12 mb-4 text-left pl-4 bg-gray-100 rounded-md text-xs outline-none"
        type="text"
        placeholder="Enter Your Location"
        ref={locationRef}
      ></input>
      <button
        type="submit"
        className={`w-1/6 h-8 rounded-3xl text-white text-xs font-medium`}
        style={{ backgroundColor: "#5d5fef" }}
        onClick={goToStep1}
      >
        GET STARTED
      </button>
    </form>
  </div>
  <div className="flex justify-center">
    <Image className="w-2/3 h-2/5" src={getStartedImage}/>
  </div>
</div>
);
};


export default aAbout
