import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../page/Home/Home';
import SignIn from '../page/SignIn/Singin';
import SignUp from '../page/RegPage/Signup';
import BusinessDetail from '../page/BusinessDetail/BusinessDetails'


const Routing = () => {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" element={<Home />}/>
        <Route Component={SignUp} path="/signup" element={<signup />}/>
        <Route Component={SignIn} path="/signin" element={<singin />}/>
        <Route Component={BusinessDetail} path="/businessdetails" element={<businessdetail />}/>
      </Routes>
    </>
  );
};

export default Routing;
