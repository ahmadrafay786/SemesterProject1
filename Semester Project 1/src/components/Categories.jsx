import React, { useState } from 'react';
import "../../src/Categories.css";

const categories = ['Beachfront', 'Cabins', 'Trending', 'Mountain', 'Lakefront'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories