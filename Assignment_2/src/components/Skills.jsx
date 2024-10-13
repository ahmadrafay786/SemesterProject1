import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'JavaScript', 'Sass', 'Angular', 'Vue', 'React', 'Redux', 'UI', 'UX'];
  return (
    <div className="card-body">
      <h5 className="h6 card-title">Skills</h5>
      {skills.map((skill, index) => (
        <a key={index} href="#" className="badge bg-primary me-1 my-1">
          {skill}
        </a>
      ))}
    </div>
  );
};

export default Skills;
