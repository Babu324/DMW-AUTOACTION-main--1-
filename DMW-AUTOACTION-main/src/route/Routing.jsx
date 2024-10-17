import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../page/Home/Home';
import UserHome from "../page/UserHome/UserHome"; 
import SignIn from '../page/SignIn/Singin';
import SignUp from '../page/RegPage/Signup';
import BusinessDetail from '../page/BusinessDetail/BusinessDetails'
import ResultsPage from "../component/Searchbar/SearchAndResults";
import PersonalDetail from "../page/PersonalDetail/PersonalDetail";
import MyOrders from '../page/MyOrders/MyOrders'; 

const Routing = () => {
  return (
    <>
      <Routes>
        <Route Component={Home} path="/" element={<Home />}/>
        <Route Component={SignUp} path="/signup" element={<signup />}/>
        <Route Component={SignIn} path="/login" element={<singin />}/>
        <Route Component={BusinessDetail} path="/businessdetails" element={<businessdetail />}/>
        <Route Component={ResultsPage} path="/results" element={<ResultsPage />} />
        <Route Component={PersonalDetail} path="/personaldetail" element={<personaldetail />}/>
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/userhome" element={<UserHome />} />
      </Routes>
    </>
  );
};

export default Routing;
