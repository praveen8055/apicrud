import React from 'react'
import { UserContext } from "../Contexts/CurrentUser";
import { useRouter } from 'next/router';
import axios from 'axios';

function Dummyconfirmation() {
  const { state, dispatch } = UserContext()
  const router = useRouter();
  // const dispatch = useDispatchCurrentUser();
  // const logoutHandler = async () => {
  //   await callApi("/logout", "POST");
  //     dispatch({isAuthenticated: false})
  //       router.push("/login")

  // };
  const logoutHandler = async () => {
    try {
      let res = await axios.post(`${process.env.SERVER_URL}/logout`)
      if (res && res.status == 200) {
        window.location.href = "/login"
      }
    } catch (error) {
      console.error(error)
    }
  }
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


export default Dummyconfirmation
