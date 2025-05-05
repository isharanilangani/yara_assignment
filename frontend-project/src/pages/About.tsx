const About: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Background image section */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className="post-image w-100"></div>
          </div>

        {/* Text content section */}
        <div className="col-md-6 post-details">
          <h2 className="fw-bold text-dark">About This App</h2>
          <p className="text-secondary mt-3">
            This application demonstrates fetching and displaying posts using React and TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
