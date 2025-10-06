// src/pages/Landing.jsx
import React, { useEffect } from "react";
import { 
  BookOpen, 
  Video, 
  BarChart3, 
  FileText, 
  Award, 
  Users, 
  Clock, 
  Building,
  Play,
  Download,
  Star,
  ChevronRight,
  CheckCircle,
  BookMarked,
  GraduationCap,
  Library,
  Activity,
  Target
} from "lucide-react";
import "./index.css";

/* --- Small helper components inside this file --- */

const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <div className="brand">
        <div className="brand-icon">
          <GraduationCap size={24} />
        </div>
        <span className="brand-text">UniLearn</span>
      </div>

      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#videos">Lectures</a></li>
        <li><a href="#library">Library</a></li>
        <li><a href="#exams">Exams</a></li>
        <li><a href="#pricing">Get Started</a></li>
      </ul>

      <div className="nav-cta">
        <a className="btn btn-ghost" href="/login">Login</a>
        <a className="btn btn-primary" href="/signup">Sign Up</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="hero" id="home">
    <div className="container">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="badge">
            <Award size={16} />
            <span>Trusted by 120+ Universities</span>
          </div>
          <h1 className="headline">University education — reimagined.</h1>
          <p className="lead">
            Interactive video lectures, curated textbooks, practice exams and progress tracking — all in one place for Ethiopian universities and beyond.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary large" href="#pricing">
              <span>Get Started — Free</span>
              <ChevronRight size={18} />
            </a>
            <a className="btn btn-outline" href="#features">Explore Features</a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <Users size={20} />
              </div>
              <div className="stat-content">
                <strong>10k+</strong>
                <span>Students</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Video size={20} />
              </div>
              <div className="stat-content">
                <strong>5k+</strong>
                <span>Lecture Hours</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Building size={20} />
              </div>
              <div className="stat-content">
                <strong>120+</strong>
                <span>Universities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="device-mockup">
            <div className="screen">
              <div className="video-thumb">
                <div className="video-header">
                  <div className="video-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="video-content">
                  <div className="lecture-progress">
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <div className="video-time">12:45 / 45:30</div>
                  </div>
                  <div className="play-button">
                    <Play size={24} fill="currentColor" />
                  </div>
                  <div className="video-title">Algorithms 101 - Sorting Methods</div>
                  <div className="video-actions">
                    <button className="video-btn">
                      <BookOpen size={14} />
                      Notes
                    </button>
                    <button className="video-btn">
                      <Target size={14} />
                      Quiz
                    </button>
                    <button className="video-btn">
                      <Download size={14} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="device-frame"></div>
            <div className="glow" />
          </div>
          
          <div className="floating-element element-1">
            <BookOpen size={24} />
          </div>
          <div className="floating-element element-2">
            <BarChart3 size={24} />
          </div>
          <div className="floating-element element-3">
            <Award size={24} />
          </div>
        </div>
      </div>
    </div>

    
  </header>
);

const Features = () => (
  <section className="section features" id="features">
    <div className="container">
      

      <div className="features-layout">
        {/* Left Image Section */}
        <div className="features-visual">
        {/* Section Header - Top Left */}
      <div className="section-header-left">
        <div className="section-badge">Features</div>
        <h3 className="section-title">Powerful features built for learning</h3>
        <p className="section-sub">Everything students and lecturers need — simple, reliable, and fast.</p>
      </div>
          <div className="visual-container">
          
            <div className="main-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Students collaborating on learning platform"
                className="image-fluid"
              />
              <div className="image-glow" style={{ background: 'linear-gradient(135deg, #FFD200, #FFB700)' }}></div>
            </div>
            
            {/* Floating Elements */}
            <div className="floating-card floating-card-1">
              <div className="floating-icon" style={{ background: 'linear-gradient(135deg, #FFD200, #FFB700)' }}>
                <Video size={20} />
              </div>
              <span>Video Lectures</span>
            </div>
            
            <div className="floating-card floating-card-2">
              <div className="floating-icon" style={{ background: 'linear-gradient(135deg, #FFE082, #FFD54F)' }}>
                <Library size={20} />
              </div>
              <span>Library</span>
            </div>
            
            <div className="floating-card floating-card-3">
              <div className="floating-icon" style={{ background: 'linear-gradient(135deg, #FFECB3, #FFE082)' }}>
                <Activity size={20} />
              </div>
              <span>Analytics</span>
            </div>

            {/* Stats Badge */}
            <div className="stats-badge">
              <div className="stats-content">
                <div className="stats-number">95%</div>
                <div className="stats-label">Student Satisfaction</div>
              </div>
              <div className="stats-glow"></div>
            </div>
          </div>
        </div>

        {/* Right Features Grid */}
        <div className="features-content">
          <div className="features-grid">
            <FeatureCard
              icon={<Video size={32} />}
              title="Interactive Video Lectures"
              desc="Chapters, timestamps, and in-video quizzes to boost retention."
              gradient="linear-gradient(135deg, #FFD200, #FFB700)"
              delay="0"
            />
            <FeatureCard
              icon={<Library size={32} />}
              title="Curated Library"
              desc="Searchable textbooks, lecture notes and downloadable PDFs."
              gradient="linear-gradient(135deg, #FFE082, #FFD54F)"
              delay="100"
            />
            <FeatureCard
              icon={<FileText size={32} />}
              title="Practice Exams"
              desc="Simulated university exams with instant analytics and feedback."
              gradient="linear-gradient(135deg, #FFECB3, #FFE082)"
              delay="200"
            />
            <FeatureCard
              icon={<Activity size={32} />}
              title="Student Analytics"
              desc="Progress dashboards, strengths, and recommended study paths."
              gradient="linear-gradient(135deg, #FFF9C4, #FFF59D)"
              delay="300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, desc, gradient, delay }) => (
  <div className="feature-card" style={{ '--delay': `${delay}ms` }}>
    <div className="feature-card-inner">
      <div className="feature-background" style={{ background: gradient }}></div>
      <div className="feature-content">
        <div className="f-icon-wrapper">
          <div className="f-icon" style={{ background: gradient }}>
            {icon}
          </div>
          <div className="icon-glow" style={{ background: gradient }}></div>
        </div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className="feature-hover"></div>
      <div className="feature-border" style={{ background: gradient }}></div>
    </div>
  </div>
);
const CourseItem = ({ title, lecturer, duration, tags, progress, thumbnail }) => (
  <div className="course-card reveal">
    <div className="course-content">
      {/* Thumbnail Section */}
      <div className="course-thumb">
        <div className="thumbnail-image">
          <img 
            src={thumbnail} 
            alt={title}
            className="thumbnail-img"
          />
          <div className="thumbnail-overlay">
            <div className="play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="progress-indicator">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="course-body">
        <div className="course-header">
          <h3 className="course-title">{title}</h3>
          <div className="course-progress-circle">
            <svg width="44" height="44">
              <circle cx="22" cy="22" r="20" strokeWidth="2" fill="none" stroke="rgba(255, 225, 168, 0.3)"/>
              <circle 
                cx="22" 
                cy="22" 
                r="20" 
                strokeWidth="2" 
                fill="none" 
                stroke="#FFB700" 
                strokeDasharray="126" 
                strokeDashoffset={126 - (progress * 126 / 100)}
                strokeLinecap="round"
              />
            </svg>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>

        <div className="course-meta">
          <div className="meta-item">
            <div className="meta-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#666">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <span className="lecturer">{lecturer}</span>
          </div>
          
          <div className="meta-item">
            <div className="meta-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#666">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <span className="duration">{duration}</span>
          </div>
        </div>

        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="course-actions">
          <button className="course-btn primary">
            <span>Continue</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Videos = () => (
  <section className="section videos" id="videos">
    <div className="container">
      {/* Section Header - Top */}
      <div className="section-header">
        <div className="section-badge">Lectures</div>
        <h3 className="section-title">Featured lectures & video series</h3>
        <p className="section-sub">Hand-picked playlists and full course series.</p>
      </div>

      {/* Horizontal Flex Container for Courses */}
      <div className="courses-horizontal-scroll">
        <div className="courses-flex-container">
          <CourseItem 
            title="Algorithms 101"
            lecturer="Dr. Alemu"
            duration="3h 12m"
            tags={["CS", "Algorithms"]}
            progress={75}
            thumbnail="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
          />
          <CourseItem 
            title="Modern Physics"
            lecturer="Prof. Bekele"
            duration="4h 05m"
            tags={["Physics"]}
            progress={45}
            thumbnail="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
          />
          <CourseItem 
            title="Calculus II"
            lecturer="Dr. Kidus"
            duration="2h 40m"
            tags={["Math"]}
            progress={90}
            thumbnail="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
          />
          <CourseItem 
            title="Intro to Databases"
            lecturer="Dr. Sara"
            duration="3h 30m"
            tags={["CS", "Databases"]}
            progress={30}
            thumbnail="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
          />
        </div>
      </div>
    </div>
  </section>
);










const Exams = () => (
  <section className="section exams" id="exams">
    <div className="container">
      <div className="section-header">
        <div className="section-badge">Assessments</div>
        <h3 className="section-title">Practice exams & assessments</h3>
        <p className="section-sub">Timed tests with analytics so you can improve where it counts.</p>
      </div>

      <div className="exams-horizontal-scroll">
        <div className="exams-flex-container">
          <div className="exam-card reveal">
            <div className="exam-content">
              <div className="exam-icon">
                <BarChart3 size={32} />
              </div>
              <div className="exam-details">
                <h4>Algorithms Mock Exam</h4>
                <p>Duration: 90 min • 50 questions</p>
                <div className="exam-difficulty">
                  <span className="difficulty-label">Medium</span>
                  <div className="difficulty-bar">
                    <div className="difficulty-fill" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
              <div className="exam-actions">
                <a className="btn btn-outline small">Try Demo</a>
                <a className="btn btn-primary small">Start Exam</a>
              </div>
            </div>
          </div>

          <div className="exam-card reveal">
            <div className="exam-content">
              <div className="exam-icon">
                <FileText size={32} />
              </div>
              <div className="exam-details">
                <h4>Calculus Past Papers</h4>
                <p>50 questions • Instant scoring</p>
                <div className="exam-difficulty">
                  <span className="difficulty-label">Hard</span>
                  <div className="difficulty-bar">
                    <div className="difficulty-fill" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
              <div className="exam-actions">
                <a className="btn btn-outline small">Try Demo</a>
                <a className="btn btn-primary small">Start Exam</a>
              </div>
            </div>
          </div>

          <div className="exam-card reveal">
            <div className="exam-content">
              <div className="exam-icon">
                <Target size={32} />
              </div>
              <div className="exam-details">
                <h4>Programming Challenges</h4>
                <p>Timed coding tests with autograding</p>
                <div className="exam-difficulty">
                  <span className="difficulty-label">Easy</span>
                  <div className="difficulty-bar">
                    <div className="difficulty-fill" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
              <div className="exam-actions">
                <a className="btn btn-outline small">Try Demo</a>
                <a className="btn btn-primary small">Start Exam</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const Testimonials = () => (
  <section className="section testimonials" id="testimonials">
    <div className="container">
      <div className="section-header">
        <div className="section-badge">Testimonials</div>
        <h3 className="section-title">What students say</h3>
      </div>
      <div className="testi-grid">
        <div className="testi-card reveal">
          <div className="testi-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#FFB700" color="#FFB700" />
            ))}
          </div>
          <p>"UniLearn helped me ace my exams — the mock tests are exactly like the real thing. The analytics showed me exactly where to improve!"</p>
          <div className="testi-author">
            <div className="author-avatar">H</div>
            <div>
              <strong>Hana</strong>
              <span>Computer Science</span>
            </div>
          </div>
        </div>
        <div className="testi-card reveal">
          <div className="testi-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#FFB700" color="#FFB700" />
            ))}
          </div>
          <p>"Video chapters and notes saved me hours of study time. The platform is so intuitive and the content is perfectly organized."</p>
          <div className="testi-author">
            <div className="author-avatar">D</div>
            <div>
              <strong>Dawit</strong>
              <span>Engineering</span>
            </div>
          </div>
        </div>
        <div className="testi-card reveal">
          <div className="testi-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#FFB700" color="#FFB700" />
            ))}
          </div>
          <p>"The practice exams gave me confidence for finals. Being able to track my progress over time made all the difference in my preparation."</p>
          <div className="testi-author">
            <div className="author-avatar">M</div>
            <div>
              <strong>Meron</strong>
              <span>Mathematics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);






const Cta = () => (
  <section className="section cta" id="pricing">
    <div className="container">
      <div className="cta-background">
        <div className="cta-glow glow-1"></div>
        <div className="cta-glow glow-2"></div>
        <div className="cta-glow glow-3"></div>
        <div className="cta-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
      
      <div className="cta-inner">
        <div className="cta-content">
          <div className="cta-badge">
            <Award size={16} />
            Limited Time Offer
          </div>
          <h3 className="cta-title">Start Your Learning Journey Today</h3>
          <p className="cta-subtitle">Join 50,000+ students accelerating their education with premium resources</p>
          
          <div className="cta-features">
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="feature-text">
                  <strong>500+ Premium Courses</strong>
                  <span>Expert-curated content</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="feature-text">
                  <strong>Download Resources</strong>
                  <span>PDFs, slides, and code</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="feature-text">
                  <strong>Progress Tracking</strong>
                  <span>Smart analytics dashboard</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="feature-text">
                  <strong>Certificate Ready</strong>
                  <span>Industry-recognized</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-stats">
            <div className="stat">
              <Users size={20} />
              <div>
                <strong>50K+</strong>
                <span>Students</span>
              </div>
            </div>
            <div className="stat">
              <Star size={20} />
              <div>
                <strong>4.9/5</strong>
                <span>Rating</span>
              </div>
            </div>
            <div className="stat">
              <BookOpen size={20} />
              <div>
                <strong>95%</strong>
                <span>Success Rate</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta-card">
          <div className="card-header">
            <h4>Choose Your Plan</h4>
            <div className="price-badge">
              <span className="price">$0</span>
              <span className="period">forever</span>
            </div>
          </div>
          
          <div className="plan-features">
            <div className="plan-feature included">
              <CheckCircle size={16} />
              <span>Access to 100+ courses</span>
            </div>
            <div className="plan-feature included">
              <CheckCircle size={16} />
              <span>Basic resources</span>
            </div>
            <div className="plan-feature included">
              <CheckCircle size={16} />
              <span>Community support</span>
            </div>
            <div className="plan-feature premium">
              <CheckCircle size={16} />
              <span>500+ premium courses</span>
            </div>
            <div className="plan-feature premium">
              <CheckCircle size={16} />
              <span>Download all resources</span>
            </div>
            <div className="plan-feature premium">
              <CheckCircle size={16} />
              <span>Priority support</span>
            </div>
          </div>
          
          <div className="card-actions">
            <button className="cta-btn cta-btn-primary large">
              <span>Start 7-Day Premium Trial</span>
              <ChevronRight size={18} />
            </button>
            <button className="cta-btn cta-btn-outline">
              <span>Create Free Account</span>
            </button>
          </div>
          
          <div className="card-note">
            <span>No credit card required • Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-waves">
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
    </div>
    
    <div className="container">
      {/* Main Footer Content */}
      <div className="footer-main">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="brand-logo">
            <div className="logo-icon">
              <GraduationCap size={28} />
            </div>
            <div className="logo-text">
              <strong>UniLearn</strong>
              <span>University education platform</span>
            </div>
          </div>
          <p className="brand-description">
            Empowering students across Ethiopia with quality education resources, 
            interactive learning tools, and comprehensive study materials.
          </p>
          <div className="social-links">
            <a className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z"/>
              </svg>
            </a>
            <a className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-group">
          <div className="links-column">
            <h4>Platform</h4>
            <ul>
              <li><a>Features</a></li>
              <li><a>Courses</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>Success Stories</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Resources</h4>
            <ul>
              <li><a>Documentation</a></li>
              <li><a>Guides & Tutorials</a></li>
              <li><a>Blog</a></li>
              <li><a>Video Library</a></li>
              <li><a>Community</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Support</h4>
            <ul>
              <li><a>Help Center</a></li>
              <li><a>Contact Us</a></li>
              <li><a>System Status</a></li>
              <li><a>Report Issue</a></li>
              <li><a>Feedback</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Company</h4>
            <ul>
              <li><a>About Us</a></li>
              <li><a>Careers</a></li>
              <li><a>Partners</a></li>
              <li><a>Press Kit</a></li>
              <li><a>Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get the latest course updates and learning tips</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              Subscribe
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
          <div className="newsletter-note">
            Join 10,000+ students in our learning community
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <p>&copy; 2024 UniLearn. Empowering students across Ethiopia.</p>
          </div>
          
          <div className="footer-legal">
            <a>Terms of Service</a>
            <a>Privacy Policy</a>
            <a>Cookie Policy</a>
            <a>Accessibility</a>
          </div>
          
          <div className="footer-stats">
            <div className="stat">
              <strong>50K+</strong>
              <span>Students</span>
            </div>
            <div className="stat">
              <strong>500+</strong>
              <span>Courses</span>
            </div>
            <div className="stat">
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button className="back-to-top">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
      </button>
    </div>
  </footer>
);
/* --- Reveal-on-scroll: add 'reveal' class observers --- */
function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* --- Exported page --- */
export default function Landing() {
  useRevealOnScroll();
  return (
    <div className="landing-page">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Videos />
        <Exams />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
