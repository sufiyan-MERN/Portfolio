import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <header>
        <Navbar />
        <div id="home" className="profile">
          <div className="introduction">
            <p className="greetings">Hello, I'm</p>
            <h1>
              syed <br /> sufiyan ali
            </h1>
            <h3>software engineer</h3>
            <p className="profile-para">
              I am 19-year-old student studing Bachelor of Computer Applications
              (BCA) passionate about technology and web development. I enjoy
              creating responsive, user-friendly, and complete web applications
              while continuously learning new technologies.
            </p>
            <span>🌐 AVAILABLE WORLDWIDE</span>
          </div>
          <div className="porfile-image">
            <img
              className="image"
              src="https://ik.imagekit.io/sufiyanImages/portfolio/Generated_Image_August_13__2026_-_2_28PM-removebg-preview.png"
              alt="photo"
            />
          </div>
          <div className="extra-details">
            <ul>
              <li>fresher</li>
              <li>3 projects</li>
              <li>available for work</li>
              <li>hyderabad,telangana</li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <a
            href="https://github.com/sufiyan-MERN"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github-link"
          >
            <div className="social-icon">G</div>
            <span className="social-text">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sufiyan-tdc-b12311429/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin-link"
          >
            <div className="social-icon">L</div>
            <span className="social-text">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/al._sufiyan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram-link"
          >
            <div className="social-icon">I</div>
            <span className="social-text">Instagram</span>
          </a>
        </div>
      </header>
    </div>
  );
}
export default Header;
