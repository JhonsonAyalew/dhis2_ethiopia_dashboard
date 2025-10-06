import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="signup-page">
      {/* Header */}
      <div className="signup-header">
        <div className="signup-logo">
          <div className="signup-logo-icon"></div>
          <span>Company Logo</span>
        </div>
        <h1 className="signup-page-title">Sign Up</h1>
        <p className="signup-page-subtitle">
          Create your account to unlock a world of education!
        </p>
      </div>

      <div className="signup-container">
        <div className="signup-card">
          <form>
            {/* Row: Full Name + Phone */}
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+251 9XXXXXXXX" required />
              </div>
            </div>

            {/* Row: University + Department */}
            <div className="form-row">
              <div className="form-group">
                <label>University</label>
                <select required>
                  <option value="">Select University</option>
                  <option value="Addis Ababa University">Addis Ababa University</option>
                  <option value="Jimma University">Jimma University</option>
                  <option value="Hawassa University">Hawassa University</option>
                  <option value="Bahir Dar University">Bahir Dar University</option>
                  <option value="Mekelle University">Mekelle University</option>
                </select>
              </div>
              <div className="form-group">
                <label>Department</label>
                <input type="text" placeholder="e.g. Computer Science" required />
              </div>
            </div>

            {/* Row: Year + Student ID */}
            <div className="form-row">
              <div className="form-group">
                <label>Year</label>
                <select required>
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5">5th Year</option>
                </select>
              </div>
              <div className="form-group">
                <label>Student ID</label>
                <input type="text" placeholder="e.g. 123456" required />
              </div>
            </div>

            {/* Row: National ID + Empty for spacing */}
            <div className="form-row">
              <div className="form-group">
                <label>National ID</label>
                <input type="text" placeholder="e.g. 1234567890" required />
              </div>
              <div className="form-group"></div>
            </div>

            {/* Row: Password + Confirm Password */}
            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <div className="signup-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    required
                  />
                  <span
                    className="signup-eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <div className="signup-password-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="********"
                    required
                  />
                  <span
                    className="signup-eye-icon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>
              </div>
            </div>

            <button type="submit" className="signup-btn">Sign Up</button>
          </form>

          <div className="signup-bottom">
            Already have an account? <a href="/">Login Here</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
