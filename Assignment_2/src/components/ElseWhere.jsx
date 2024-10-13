import React from 'react';

const ElseWhere = () => {
  const links = ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'];
  return (
    <div className="card-body">
      <h5 className="h6 card-title">Elsewhere</h5>
      <ul className="list-unstyled mb-0">
        {links.map((link, index) => (
          <li key={index} className="mb-1">
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElseWhere;
