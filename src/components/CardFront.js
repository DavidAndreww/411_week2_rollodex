import React from "react";

const CardFront = ({ imgLrg, phone, name }) => {
  return (
    <div className="card-front">
      <img className="large-photo" src={imgLrg} alt={name} />
      <h3>{phone}</h3>
    </div>
  );
};

export default CardFront;
