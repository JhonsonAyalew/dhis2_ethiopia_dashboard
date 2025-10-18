import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <div className="login-logo-icon"></div>
          <span>Company Logo</span>
        </div>

        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">
          Log in to continue your journey with us.
        </p>

        <form className="login-form">
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <div className="login-password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
            />
            <span
              className="login-eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <div className="login-forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-divider">
          <span>or continue with</span>
        </div>

        <div className="login-socials">
          <button className="login-social-btn google">Google</button>
          <button className="login-social-btn github">GitHub</button>
        </div>

        <div className="login-signup">
          Don’t have an account? <a href="/signup">Create One</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
