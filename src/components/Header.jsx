function Header() {
  return (
    <div className="header">
      <header>
        <div className="nav-bar">
          <div>
            <h3>Full satck developer</h3>
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
            <h1>syed <br /> sufiyan ali</h1>
            <h3>software engineer</h3>
            <p className="profile-para">
              I am a 19-year-old BCA (Bachelor of Computer Applications) student
              passionate about technology and web development. I enjoy creating
              responsive, user-friendly, and complete web applications while
              continuously learning new technologies.
            </p>
            <span>🌐 AVAILABLE WORLDWIDE</span>
          </div>
          <div className="porfile-image">
            <img
              className="image"
              src="https://ik.imagekit.io/sufiyanImages/portfolio/sufiyan%20photo.jpeg"
              alt="photo"
            />
          </div>
          <div className="extra-details">
            <ul>
              <li>fresher</li>
              <li>projects</li>
              <li>available for work</li>
              <li>hyderabad,telangana</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
