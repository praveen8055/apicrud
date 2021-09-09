import React from 'react'
import { callApi } from "./Api/LoginUtils";
import {
    useDispatchCurrentUser,
    useCurrentUser,
  } from "./Contexts/CurrentUser";
  import { useRouter } from 'next/router';

function dummyconfirmation() {
  const router = useRouter();
  const dispatch = useDispatchCurrentUser();
  const currentUser = useCurrentUser();
  const logoutHandler = async () => {
    await callApi("/logout", "POST");
    // dispatch({ type: "LOGOUT" });
    router.replace("/login");
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1>You have Sucessfully logged in</h1>
      <button
        className="bg-blue-700 w-1/4 h-8 rounded-3xl text-white mb-5"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};


export default dummyconfirmation
