
import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="App">
      {/* Header */}
      <header className={`header ${scrollY > 50 ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="nav-brand">
            <div className="logo">
              <div className="sun-icon">☀</div>
              <span>SolarTech</span>
            </div>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="floating-panels">
            <div className="panel panel-1"></div>
            <div className="panel panel-2"></div>
            <div className="panel panel-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Power Your Future with
              <span className="highlight"> Clean Solar Energy</span>
            </h1>
            <p className="hero-subtitle">
              Transform your home or business with cutting-edge solar technology. 
              Save money, reduce carbon footprint, and embrace sustainable living.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Free Quote</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat">
                <div className="stat-number">50MW</div>
                <div className="stat-label">Energy Generated</div>
              </div>
              <div className="stat">
                <div className="stat-number">99%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Solar Solutions</h2>
            <p>Comprehensive solar services tailored to your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Residential Solar</h3>
              <p>Custom solar panel installations for homes with complete maintenance and support.</p>
              <ul>
                <li>Free site assessment</li>
                <li>Custom design</li>
                <li>Professional installation</li>
                <li>25-year warranty</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Commercial Solar</h3>
              <p>Large-scale solar solutions for businesses and industrial facilities.</p>
              <ul>
                <li>ROI analysis</li>
                <li>Scalable systems</li>
                <li>Tax incentives</li>
                <li>Monitoring systems</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Maintenance & Repair</h3>
              <p>Keep your solar systems running at peak performance with our expert care.</p>
              <ul>
                <li>Regular inspections</li>
                <li>Performance optimization</li>
                <li>Emergency repairs</li>
                <li>System upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Leading the Solar Revolution</h2>
              <p>
                With over a decade of experience in renewable energy, SolarTech has been 
                at the forefront of solar technology innovation. We've helped thousands 
                of customers transition to clean, sustainable energy solutions.
              </p>
              <div className="features">
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <div>
                    <h4>High Efficiency</h4>
                    <p>State-of-the-art panels with 22%+ efficiency ratings</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">💰</div>
                  <div>
                    <h4>Cost Savings</h4>
                    <p>Reduce your energy bills by up to 90%</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🌱</div>
                  <div>
                    <h4>Eco-Friendly</h4>
                    <p>Reduce your carbon footprint significantly</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="solar-animation">
                <div className="sun"></div>
                <div className="rays">
                  <div className="ray"></div>
                  <div className="ray"></div>
                  <div className="ray"></div>
                  <div className="ray"></div>
                </div>
                <div className="solar-panel"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Go Solar?</h2>
            <p>Get your free consultation and quote today</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>1-800-SOLAR-TECH</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>info@solartech.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Service Area</h4>
                  <p>Nationwide Coverage</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your energy needs" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Get Free Quote</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <div className="sun-icon">☀</div>
                <span>SolarTech</span>
              </div>
              <p>Leading provider of clean, renewable solar energy solutions.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#services">Residential Solar</a>
                <a href="#services">Commercial Solar</a>
                <a href="#services">Maintenance</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
                <a href="#">Careers</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#">Solar Calculator</a>
                <a href="#">Financing</a>
                <a href="#">Warranties</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SolarTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
