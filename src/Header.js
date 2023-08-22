import "./Header.css";
import logo from "./logo.png";
import Store from "./Store";
import Library from "./Library";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Header() {
  return (
    <BrowserRouter>
      <div className="header-container">
        <div className="container">
          <img src={logo} alt="Epic Games Logo" width="60px" height="60px" />
          <Link to="/">Store</Link>
          <Link to="/library">Library</Link>
          <p></p>
          <button className="sign-up">
            <Link to="/signup" style={{margin: '0px'}}>Sign Up</Link>
          </button>
          <p></p>
          <button className="download">Download</button>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/library" element={<Library />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
