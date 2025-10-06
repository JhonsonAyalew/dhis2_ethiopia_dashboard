import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import slide1 from "../assets/one.jpg";
import slide2 from "../assets/two.jpg";
import slide3 from "../assets/three.jpg";
import "./login.css";
const images = [slide1, slide2, slide3];

function Login() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Left carousel */}
      <div className="left">
        <div className="slider">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={index === currentIndex ? "active" : ""}
            />
          ))}
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active-dot" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Right login section */}
      <div className="right">
        <div className="logo">
          <div className="logo-icon"></div>
          <span>Company Logo</span>
        </div>
        <h2 className="title">Let the Journey Begin!</h2>
        <p className="subtitle">
          Unlock a world of education with a single click! Please login in to your account.
        </p>
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="@example.com" required />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn-login">Login</button>
        </form>
        <div className="signup">
          Don’t have an account? <a href="/signup">Sign Up For Free</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
