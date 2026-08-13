function Header() {
  return (
    <div className="header">
      <header>
        <div className="nav-bar">
          <div>
            <h2>Full satck developer</h2>
          </div>
          <div className="nav-links">
            <ul>
              <li>Home</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Education</li>
            </ul>
          </div>
        </div>
        <div className="profile">
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
          <div> github</div>
          <div>linkdin</div>
          <div>instagram</div>
        </div>
      </header>
    </div>
  );
}
export default Header;
