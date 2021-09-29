import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
// import { callApi } from "../ApiUtils/LoginUtils";

function GoogleAuthCallBack() {
  const [auth, setAuth] = useState();
  const router = useRouter();
  useEffect(() => {
    console.log("In Google");
    if (!router) {
      return;
    }
    const { search } = router;
    axios({
      method: "GET",
      url: `http://localhost:3000/connect/google/redirect?${search}`,
    })
      .then((res) => res.data)
      .then(setAuth);
    
  }, [router]);

  console.log(auth);
  console.log("In this component");

  return (
    <div>
      {auth && (
        <>
          <div>Jwt: {auth.jwt}</div>
          <div>User Id: {auth.user.id}</div>
          <div>Provider: {auth.user.provider}</div>
        </>
      )}
    </div>
  );
}

export default GoogleAuthCallBack;