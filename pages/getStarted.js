import React from 'react'
import getStartedImage from "../public/assets/getStartedImage.png";
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'


function about() {
    const router = useRouter();
  const goToStep1 = (e) => {
    router.push("/step1");
  };

    return (
        <div>
            <div className="w-full flex flex-col items-center">
      <div className="flex flex-col w-full m-10 items-center">
        <h1 className="text-3xl mb-3">
          <span>Welcome to </span>
          <span className="text-blue-700 font-bold">Appreaz</span>
        </h1>
        <p className="mb-5">
          <span>Your </span>
          <span className="font-bold">one stop </span>
          <span>destination for </span>
          <span className="font-bold">all your society needs</span>
        </p>
        <input
          className="w-4/12 h-10 mb-4 text-left pl-4 bg-gray-100 rounded-md"
          type="text"
          placeholder="Enter Your Location"
        ></input>
        <button
          type="submit"
          className="bg-blue-700 w-1/6 h-8 rounded-3xl text-white"
          onClick={goToStep1}
        >
          Get Started
        </button>
      </div>
      <div className="flex justify-center">
        <Image className="w-9/12 h-3/6" src={getStartedImage}/>
      </div>
    </div>
        </div>
    )
}

export default about
