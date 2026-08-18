function Navbar() {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-brand">
          <h2>Full stack developer</h2>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
