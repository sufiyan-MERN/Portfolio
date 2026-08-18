function Skills() {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-wrapper">
        <div className="skill-category mern-stack-developer">
          <h2 className="skill-title">MERN Stack Developer</h2>
          <p className="skill-description">
            MERN Stack development combines MongoDB, Express.js, React, and
            Node.js to build modern web applications. It allows developers to
            create fast, scalable, and responsive full-stack applications. I use
            React to build interactive user interfaces and Node.js with
            Express.js for backend development. MongoDB is used to store and
            manage application data efficiently.
          </p>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-image-wrapper">
                <img
                  src="https://ik.imagekit.io/sufiyanImages/portfolio/images_q=tbn:ANd9GcRtW41-f13wcfMVqPEl9X70IAV9fvf7oYE6svE8e4xIEA&s=10"
                  alt="React"
                />
              </div>
              <p className="skill-label">Javascript</p>
            </div>
            <div className="skill-item">
              <div className="skill-image-wrapper">
                <img
                  src="https://ik.imagekit.io/sufiyanImages/portfolio/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                  alt="Node.js"
                />
              </div>
              <p className="skill-label">React</p>
            </div>
            <div className="skill-item">
              <div className="skill-image-wrapper">
                <img
                  src="https://ik.imagekit.io/sufiyanImages/portfolio/default.png"
                  alt="MongoDB"
                />
              </div>
              <p className="skill-label">Node JS</p>
            </div>
            <div className="skill-item">
              <div className="skill-image-wrapper">
                <img
                  src="https://ik.imagekit.io/sufiyanImages/portfolio/images_q=tbn:ANd9GcTfawFYXoFiAS3KTgmeACorIdtRrhJogmlyw_MzkUKt68TJjm0Gwc1RzCk&s=10"
                  alt="Express"
                />
              </div>
              <p className="skill-label">Mongodb</p>
            </div>
          </div>
        </div>
        <div className="skill-category data-analyst">
          <h2 className="skill-title">Data Analyst</h2>
          <p className="skill-description">
            Data analysis involves collecting, cleaning, and interpreting data
            to find useful insights. I use Python and SQL to analyze and manage
            large datasets efficiently. Tools like Excel and Power BI help
            create reports, dashboards, and meaningful visualizations. Data
            analysis helps businesses make better, data-driven decisions and
            identify important trends.
          </p>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-image-wrapper">
                <img
                  src="https://ik.imagekit.io/sufiyanImages/portfolio/Microsoft_Office_Excel_(2019_2025).svg.png"
                  alt="Excel"
                />
              </div>
              <p className="skill-label">Excel</p>
            </div>
            <div className="skill-item">
              <div className="skill-image-wrapper">
                <img
                  src="https://ik.imagekit.io/sufiyanImages/portfolio/images_q=tbn:ANd9GcRFpVtUINdy8s8ZUEUzg9EjsNS3zyWKOOhIVc56IJCdsQ&s=10"
                  alt="Power BI"
                />
              </div>
              <p className="skill-label">Power BI</p>
            </div>
            <div className="skill-item">
              <div className="skill-image-wrapper">
                <img
                  src="https://ik.imagekit.io/sufiyanImages/portfolio/images_q=tbn:ANd9GcQieoF47YJUW40c2yAtvXai6dGIzhcY-GcmLhgKgaNeNQ&s=10"
                  alt="SQL"
                />
              </div>
              <p className="skill-label">SQL</p>
            </div>
            <div className="skill-item">
              <div className="skill-image-wrapper">
                <img
                  src="https://ik.imagekit.io/sufiyanImages/portfolio/python_logo_icon_168886.png"
                  alt="Python"
                />
              </div>
              <p className="skill-label">Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
