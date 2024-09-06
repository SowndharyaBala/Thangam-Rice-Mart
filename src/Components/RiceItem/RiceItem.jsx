import React from 'react';


const RiceItem = ({ name, description, image }) => {
  return (
    <div className="rice-item">
      <img src={image} alt={name} className="rice-image" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default RiceItem;
