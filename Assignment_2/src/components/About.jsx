import React from 'react';

const About = () => {
  return (
    <div className="card-body">
      <h5 className="h6 card-title">About</h5>
      <ul className="list-unstyled mb-0">
        <li className="mb-1">
          <span data-feather="home" className="feather-sm me-1"></span> Lives in <a href="#">Lahore, Pakistan</a>
        </li>
        <li className="mb-1">
          <span data-feather="briefcase" className="feather-sm me-1"></span> Works at <a href="#">Jss-Devs</a>
        </li>
        <li className="mb-1">
          <span data-feather="map-pin" className="feather-sm me-1"></span> From <a href="#">Multan</a>
        </li>
      </ul>
    </div>
  );
};

export default About;
