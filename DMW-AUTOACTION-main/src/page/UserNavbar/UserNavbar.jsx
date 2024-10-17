import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import "./UserNavbar.css"; // Separate CSS for Navbar

const UserNavbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // Set initial cart item count to 0
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Here, you would fetch the actual cart item count and user info
    // Example: axios.get('/api/cart').then(response => setCartItemCount(response.data.count));
  }, []);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleCartMouseEnter = () => {
    setCartDropdownVisible(true);
  };

  const handleCartMouseLeave = () => {
    setCartDropdownVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear the token from localStorage
    navigate("/"); // Redirect to home page
  };

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

          <li className="account" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="dropdown">
              <MdAccountCircle className="icon" />
              <div>
                <span className="account_title">My Account</span>
                {dropdownVisible && (
                  <ul className="dropdown_menu">
                    <li>
                      <Link to="/my-orders">My Orders</Link>
                    </li>
                    <li onClick={handleLogout} className="logout-option"> {/* Logout option */}
                      Logout
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </li>

          <li className="cart" onMouseEnter={handleCartMouseEnter} onMouseLeave={handleCartMouseLeave}>
            <div className="dropdown">
              <FaShoppingCart className="cart_icon" />
              {cartItemCount > 0 && (
                <span className="cart_items_count">{cartItemCount}</span>
              )}
              <div>
                <span className="account_title">Cart</span>
                {cartDropdownVisible && (
                  <ul className="dropdown_cart_menu">
                    <li>
                      <Link to="/cart">View Cart</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserNavbar;
