import React from 'react';
import "../profile.css";
import About from './About';
import Elsewhere from './Elsewhere';
import ProfileImage from './ProfileImage';
import Skills from './Skills';

const ProfileCard = () => {
  return (
    <div className="col-md-4 col-xl-3">
      <div className="card mb-3">
        <div className="card-header">
          <h5 className="card-title mb-0">Profile Details</h5>
        </div>
        <ProfileImage />
        <hr className="my-0" />
        <Skills />
        <hr className="my-0" />
        <About />
        <hr className="my-0" />
        <Elsewhere />
      </div>
    </div>
  );
};

export default ProfileCard;
