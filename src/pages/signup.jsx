// src/pages/Signup.jsx
import React, { useState } from "react";
import { 
  Eye, 
  EyeOff, 
  Calendar, 
  Upload, 
  User, 
  BookOpen, 
  Shield, 
  Mail, 
  Phone, 
  Lock,
  CheckCircle,
  GraduationCap,
  Users,
  Building,
  Award,
  ChevronDown,
  HelpCircle
} from "lucide-react";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    dateOfBirth: "",
    gender: "",
    profilePhoto: null,
    
    // Account Type
    accountType: "",
    
    // Student Information
    university: "",
    department: "",
    academicYear: "",
    enrollmentNumber: "",
    gpa: "",
    
    // Security
    password: "",
    confirmPassword: "",
    nationalId: "",
    twoFactorEnabled: false,
    
    // Recovery Information
    backupEmail: "",
    backupPhone: "",
    securityQuestion: "",
    securityAnswer: "",
    
    // Legal & Consent
    acceptTerms: false,
    acceptPrivacy: false,
    consentDataUsage: false,
    
    // Platform Preferences
    language: "english",
    accessibilityOptions: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const universities = [
    "Addis Ababa University",
    "Addis Ababa Science and Technology University",
    "Bahir Dar University",
    "Mekelle University",
    "Hawassa University",
    "Jimma University",
    "Arba Minch University",
    "University of Gondar"
  ];

  const departments = [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Medicine",
    "Law",
    "Business Administration",
    "Economics"
  ];

  const academicYears = ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year+", "Graduate"];

  return (
    <div className="signup-page">
      {/* Background Graphics */}
      <div className="signup-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="signup-container">
        {/* Left Side - Graphics */}
        <div className="signup-graphics">
          <div className="graphics-content">
            <div className="logo-section">
              <div className="logo">
                <GraduationCap size={32} />
                <span>UniLearn</span>
              </div>
              <h1>Join Our Learning Community</h1>
              <p>Create your account to access quality education and connect with learners across Ethiopia</p>
            </div>

            <div className="features-showcase">
              <div className="feature-item">
                <div className="feature-icon">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4>Quality Education</h4>
                  <p>Access curated courses from top universities</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Users size={24} />
                </div>
                <div>
                  <h4>Connect & Collaborate</h4>
                  <p>Join thousands of students across Ethiopia</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <div>
                  <h4>Track Progress</h4>
                  <p>Monitor your learning journey with analytics</p>
                </div>
              </div>
            </div>

            <div className="stats-section">
              <div className="stat">
                <strong>50K+</strong>
                <span>Students</span>
              </div>
              <div className="stat">
                <strong>120+</strong>
                <span>Universities</span>
              </div>
              <div className="stat">
                <strong>5K+</strong>
                <span>Courses</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="signup-form-container">
          <div className="form-header">
            <div className="progress-steps">
              {[1, 2, 3, 4, 5, 6].map(step => (
                <div key={step} className={`step ${step === currentStep ? 'active' : ''} ${step < currentStep ? 'completed' : ''}`}>
                  <div className="step-number">
                    {step < currentStep ? <CheckCircle size={16} /> : step}
                  </div>
                  <div className="step-label">
                    {step === 1 && 'Personal'}
                    {step === 2 && 'Account'}
                    {step === 3 && 'Academic'}
                    {step === 4 && 'Security'}
                    {step === 5 && 'Preferences'}
                    {step === 6 && 'Review'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Personal Information</h2>
                  <p>Tell us about yourself</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <div className="input-with-icon">
                      <User size={18} />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="username">Username *</label>
                    <div className="input-with-icon">
                      <User size={18} />
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="johndoe"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <div className="input-with-icon">
                      <Mail size={18} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <div className="input-with-icon">
                      <Phone size={18} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+251 911 234567"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <div className="input-with-icon">
                      <Building size={18} />
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Addis Ababa"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <div className="input-with-icon">
                      <Calendar size={18} />
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="gender">Gender (Optional)</label>
                    <div className="input-with-icon">
                      <User size={18} />
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                      <ChevronDown size={16} className="select-arrow" />
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="profilePhoto">Profile Photo (Optional)</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        onChange={handleInputChange}
                        accept="image/*"
                        className="file-input"
                      />
                      <label htmlFor="profilePhoto" className="file-label">
                        <Upload size={18} />
                        <span>{formData.profilePhoto ? formData.profilePhoto.name : 'Choose file'}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Account Type */}
            {currentStep === 2 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Account Type</h2>
                  <p>Choose your role on the platform</p>
                </div>

                <div className="account-type-grid">
                  <div 
                    className={`account-type-card ${formData.accountType === 'student' ? 'selected' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, accountType: 'student' }))}
                  >
                    <div className="account-icon">
                      <BookOpen size={32} />
                    </div>
                    <h3>Student</h3>
                    <p>I'm here to learn</p>
                    <ul>
                      <li>Access all courses</li>
                      <li>Track learning progress</li>
                      <li>Join study groups</li>
                    </ul>
                  </div>

                  <div 
                    className={`account-type-card ${formData.accountType === 'teacher' ? 'selected' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, accountType: 'teacher' }))}
                  >
                    <div className="account-icon">
                      <User size={32} />
                    </div>
                    <h3>Teacher</h3>
                    <p>I'm here to teach</p>
                    <ul>
                      <li>Create and manage courses</li>
                      <li>Engage with students</li>
                      <li>Track student progress</li>
                    </ul>
                  </div>

                  <div 
                    className={`account-type-card ${formData.accountType === 'admin' ? 'selected' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, accountType: 'admin' }))}
                  >
                    <div className="account-icon">
                      <Shield size={32} />
                    </div>
                    <h3>Admin</h3>
                    <p>Platform administrator</p>
                    <ul>
                      <li>Manage platform content</li>
                      <li>User management</li>
                      <li>System configuration</li>
                    </ul>
                  </div>

                  <div 
                    className={`account-type-card ${formData.accountType === 'guest' ? 'selected' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, accountType: 'guest' }))}
                  >
                    <div className="account-icon">
                      <Users size={32} />
                    </div>
                    <h3>Guest</h3>
                    <p>Just browsing</p>
                    <ul>
                      <li>Limited course access</li>
                      <li>Browse content</li>
                      <li>Upgrade anytime</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Student Information */}
            {currentStep === 3 && formData.accountType === 'student' && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Student Information</h2>
                  <p>Your academic details</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="university">University *</label>
                    <div className="input-with-icon">
                      <Building size={18} />
                      <select
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select university</option>
                        {universities.map(uni => (
                          <option key={uni} value={uni}>{uni}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="select-arrow" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="department">Department *</label>
                    <div className="input-with-icon">
                      <BookOpen size={18} />
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select department</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="select-arrow" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="academicYear">Academic Year *</label>
                    <div className="input-with-icon">
                      <Award size={18} />
                      <select
                        id="academicYear"
                        name="academicYear"
                        value={formData.academicYear}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select year</option>
                        {academicYears.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="select-arrow" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="enrollmentNumber">Enrollment Number *</label>
                    <div className="input-with-icon">
                      <User size={18} />
                      <input
                        type="text"
                        id="enrollmentNumber"
                        name="enrollmentNumber"
                        value={formData.enrollmentNumber}
                        onChange={handleInputChange}
                        placeholder="AAU/CS/2021/001"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="gpa">GPA (Optional)</label>
                    <div className="input-with-icon">
                      <Award size={18} />
                      <input
                        type="number"
                        id="gpa"
                        name="gpa"
                        value={formData.gpa}
                        onChange={handleInputChange}
                        placeholder="3.75"
                        step="0.01"
                        min="0"
                        max="4.0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Security */}
            {currentStep === 4 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Security</h2>
                  <p>Protect your account</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <div className="input-with-icon">
                      <Lock size={18} />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter password"
                        required
                      />
                      <button 
                        type="button" 
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <div className="input-hint">At least 8 characters</div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password *</label>
                    <div className="input-with-icon">
                      <Lock size={18} />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm password"
                        required
                      />
                      <button 
                        type="button" 
                        className="password-toggle"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="nationalId">National ID *</label>
                    <div className="input-with-icon">
                      <Shield size={18} />
                      <input
                        type="text"
                        id="nationalId"
                        name="nationalId"
                        value={formData.nationalId}
                        onChange={handleInputChange}
                        placeholder="Enter your national ID"
                        required
                      />
                    </div>
                    <div className="input-hint">For verification purposes</div>
                  </div>

                  <div className="form-group full-width">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="twoFactorEnabled"
                        name="twoFactorEnabled"
                        checked={formData.twoFactorEnabled}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="twoFactorEnabled">
                        <Shield size={16} />
                        Enable Two-Factor Authentication
                        <span className="checkbox-subtitle">Add an extra layer of security</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="recovery-section">
                  <h3>Recovery Information</h3>
                  <p>Help us recover your account if you forget your password</p>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="backupEmail">Backup Email</label>
                      <div className="input-with-icon">
                        <Mail size={18} />
                        <input
                          type="email"
                          id="backupEmail"
                          name="backupEmail"
                          value={formData.backupEmail}
                          onChange={handleInputChange}
                          placeholder="backup@example.com"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="backupPhone">Backup Phone</label>
                      <div className="input-with-icon">
                        <Phone size={18} />
                        <input
                          type="tel"
                          id="backupPhone"
                          name="backupPhone"
                          value={formData.backupPhone}
                          onChange={handleInputChange}
                          placeholder="+251 911 234567"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="securityQuestion">Security Question</label>
                      <div className="input-with-icon">
                        <HelpCircle size={18} />
                        <select
                          id="securityQuestion"
                          name="securityQuestion"
                          value={formData.securityQuestion}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a question</option>
                          <option value="mother-maiden">What's your mother's maiden name?</option>
                          <option value="first-pet">What was your first pet's name?</option>
                          <option value="birth-city">In what city were you born?</option>
                          <option value="high-school">What high school did you attend?</option>
                        </select>
                        <ChevronDown size={16} className="select-arrow" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="securityAnswer">Security Answer</label>
                      <div className="input-with-icon">
                        <Lock size={18} />
                        <input
                          type="text"
                          id="securityAnswer"
                          name="securityAnswer"
                          value={formData.securityAnswer}
                          onChange={handleInputChange}
                          placeholder="Your answer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Legal & Preferences */}
            {currentStep === 5 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Legal & Preferences</h2>
                  <p>Customize your experience and review our policies</p>
                </div>

                <div className="legal-section">
                  <h3>Legal & Consent</h3>
                  <p>Please review and accept our policies</p>

                  <div className="checkbox-group legal">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="acceptTerms">
                      I accept the Terms and Conditions *
                      <span className="checkbox-subtitle">You agree to our Terms of Service and Community Guidelines</span>
                    </label>
                  </div>

                  <div className="checkbox-group legal">
                    <input
                      type="checkbox"
                      id="acceptPrivacy"
                      name="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="acceptPrivacy">
                      I accept the Privacy Policy *
                      <span className="checkbox-subtitle">You understand how we collect, use, and protect your data</span>
                    </label>
                  </div>

                  <div className="checkbox-group legal">
                    <input
                      type="checkbox"
                      id="consentDataUsage"
                      name="consentDataUsage"
                      checked={formData.consentDataUsage}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="consentDataUsage">
                      I consent to data usage
                      <span className="checkbox-subtitle">You allow us to process your data for platform improvements</span>
                    </label>
                  </div>
                </div>

                <div className="preferences-section">
                  <h3>Platform Preferences</h3>
                  <p>Customize your experience</p>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="language">Language Preference *</label>
                      <div className="input-with-icon">
                        <User size={18} />
                        <select
                          id="language"
                          name="language"
                          value={formData.language}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="english">English</option>
                          <option value="amharic">Amharic</option>
                          <option value="oromo">Oromo</option>
                          <option value="tigrinya">Tigrinya</option>
                        </select>
                        <ChevronDown size={16} className="select-arrow" />
                      </div>
                      <div className="input-hint">Choose your preferred platform language</div>
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="accessibilityOptions">Accessibility Options</label>
                      <textarea
                        id="accessibilityOptions"
                        name="accessibilityOptions"
                        value={formData.accessibilityOptions}
                        onChange={handleInputChange}
                        placeholder="Let us know if you need any accessibility features (e.g., screen reader support, high contrast mode, etc.)"
                        rows="3"
                      />
                      <div className="input-hint">Optional: Help us make the platform more accessible for you</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Review & Submit */}
            {currentStep === 6 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Complete Registration</h2>
                  <p>Review your information and create your account</p>
                </div>

                <div className="review-section">
                  <div className="review-card">
                    <h3>Personal Information</h3>
                    <div className="review-grid">
                      <div className="review-item">
                        <span>Full Name:</span>
                        <strong>{formData.fullName || "Not provided"}</strong>
                      </div>
                      <div className="review-item">
                        <span>Username:</span>
                        <strong>{formData.username || "Not provided"}</strong>
                      </div>
                      <div className="review-item">
                        <span>Email:</span>
                        <strong>{formData.email || "Not provided"}</strong>
                      </div>
                      <div className="review-item">
                        <span>Phone:</span>
                        <strong>{formData.phone || "Not provided"}</strong>
                      </div>
                    </div>
                  </div>

                  {formData.accountType === 'student' && (
                    <div className="review-card">
                      <h3>Academic Information</h3>
                      <div className="review-grid">
                        <div className="review-item">
                          <span>University:</span>
                          <strong>{formData.university || "Not provided"}</strong>
                        </div>
                        <div className="review-item">
                          <span>Department:</span>
                          <strong>{formData.department || "Not provided"}</strong>
                        </div>
                        <div className="review-item">
                          <span>Academic Year:</span>
                          <strong>{formData.academicYear || "Not provided"}</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="review-card">
                    <h3>Account Security</h3>
                    <div className="review-grid">
                      <div className="review-item">
                        <span>Two-Factor Auth:</span>
                        <strong>{formData.twoFactorEnabled ? "Enabled" : "Disabled"}</strong>
                      </div>
                      <div className="review-item">
                        <span>Language:</span>
                        <strong>{formData.language || "English"}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="final-actions">
                  <button type="submit" className="btn btn-primary large">
                    Create My Account
                  </button>
                  <p className="agreement-note">
                    By creating an account, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" className="btn btn-outline" onClick={prevStep}>
                  Back
                </button>
              )}
              
              {currentStep < 6 ? (
                <button type="button" className="btn btn-primary" onClick={nextStep}>
                  Continue
                </button>
              ) : null}
            </div>
          </form>

          <div className="form-footer">
            <p>Already have an account? <a href="/login">Sign in here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
