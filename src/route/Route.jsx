import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../component/auth/signUp/SignUp";
import SignIn from "../component/auth/signIn/SignIn";
import Home from "../component/home/Home";
import NewSignup from "../component/auth/signIn/NewSignup";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newsignup" element={<NewSignup/>}/>
      </Routes>
    </>
  );
};

export default Router;
