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
        <li>✅ Fetches posts from an external API</li>
        <li>✅ Displays data in a clean and responsive UI</li>
        <li>✅ Uses React Hooks for state and effects</li>
        <li>✅ Type safety with TypeScript</li>
      </ul>

      <h4 className="text-dark">Built With</h4>
      <ul className="list-unstyled text-secondary">
        <li>🔹 React</li>
        <li>🔹 TypeScript</li>
        <li>🔹 React Router</li>
        <li>🔹 Bootstrap for layout and styling</li>
      </ul>
    </div>
  );
};

export default AboutContent;
