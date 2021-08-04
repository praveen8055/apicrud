import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { callApi } from "../../ApiUtils/LoginUtils";

function GoogleAuthCallBack() {
  const [auth, setAuth] = useState();
  const location = useLocation();
  useEffect(() => {
    console.log("In Google");
    if (!location) {
      return;
    }
    const { search } = location;
    axios({
      method: "GET",
      url: `http://localhost:3000/connect/google/redirect?${search}`,
    })
      .then((res) => res.data)
      .then(setAuth);
    // const getData = async () => {
    //   if (!location) {
    //     return;
    //   }
    //   const { search } = location;
    //   const response = await callApi(`/auth/google/callback?${search}`);
    //   console.log(response);
    // };
    // getData();
  }, [location]);

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
