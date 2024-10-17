import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import Button from "../Button/Button";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="div_container">
      <div className="navbar_flex">
        
        <Link to="/" className="logo">
          <img className="logo_img" src="/AutoAction DMW Logo.png" alt="Logo" />
        </Link>

        <ul className="items">
         
          <li className="email">
            <HiMail className="icon" />
            <div>
              <span className="Email">BUSINESS@MARIPOSADIGITAL.COM</span>
              <br />
              <span className="text_sm">Hour: 09:00am - 06:00pm</span>
            </div>
          </li>

          <li className="contact">
            <BiSolidPhoneCall className="icon" />
            <div>
              <span className="Phone">8617378821</span>
              <br />
              <span className="text_sm">(Free Call)</span>
            </div>
          </li>

          <li className="singin">
            <MdAccountCircle className="icon" />
            <div>
              <span className="signin">
                <Link to="/login">SIGN-IN</Link>
              </span>
              <br />
              <span className="text_sm">Lead Area</span>
            </div>
          </li>
          <Button
          className='Supplier'
          width="11rem"
          text="Become A Supplier➡"
          height="3rem"
          fontSize="1rem"
          background="#00000"
          color="#FFFFFF"
          event={() => {
            navigate("/Signup");
          }}
        />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;