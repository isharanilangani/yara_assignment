import React from "react";

const AboutContent: React.FC = () => {
  return (
    <div className="bg-light-green pt-3 px-5 pb-5 mt-n3 position-relative z-1">
      <h2 className="fw-bold text-dark mb-4">About This App</h2>
      <p className="text-secondary mb-4">
        This application demonstrates how to fetch and display posts using modern web development practices with React and TypeScript.
      </p>

      <h4 className="text-dark">Key Features</h4>
      <ul className="list-unstyled text-secondary mb-4">
        {[
          "Fetches posts from an external API",
          "Displays data in a clean and responsive UI",
          "Uses React Hooks for state and effects",
          "Type safety with TypeScript",
        ].map((item, index) => (
          <li key={index} className="hover-list-item">
            <i className="bi bi-arrow-right me-2 text-dark"></i>
            {item}
          </li>
        ))}
      </ul>

      <h4 className="text-dark">Built With</h4>
      <ul className="list-unstyled text-secondary">
        {["React", "TypeScript", "React Router", "Bootstrap for layout and styling"].map(
          (tech, index) => (
            <li key={index} className="hover-list-item">
              <i className="bi bi-arrow-right me-2 text-dark"></i>
              {tech}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default AboutContent;
