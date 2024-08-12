import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");

  /*
  if no dependency array => useEffect is called on every render
  useEffect(() => {
    console.log("useEffect called");
  });

  if dependency array is empty = [] => useEffect is called on initial render(just once)
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  if dependency array is [btnNameReact] => called everytime 'btnNameReact' is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);
  */
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* do not use anchor tags in React as this will reload the page, and will work slow */}
            {/* <a href="/about">About</a> */}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {/* rather use Link tag, so that the page do not reloads */}
            <Link to="/contact">Contacts</Link>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
