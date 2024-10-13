import React from 'react';

const ProfileImage = () => {
  return (
    <div className="card-body text-center">
      <img
        src=""
        alt="Ahmad Rafay"
        className="img-fluid rounded-circle mb-2"
        width="128"
        height="128"
      />
      <h5 className="card-title mb-0">Christina Mason</h5>
      <div className="text-muted mb-2">Lead Developer</div>
      <div>
        <a className="btn btn-primary btn-sm" href="#">
          Follow
        </a>
        <a className="btn btn-primary btn-sm" href="#">
          <span data-feather="message-square"></span> Message
        </a>
      </div>
    </div>
  );
};

export default ProfileImage;
