import React from "react";

const CardFront = ({ contacts }) => {
  return (
    <div className="card-front">
      <img className="large-photo" src={contacts.picture.large} alt={contacts.name.first} />
      <h3>{contacts.phone}</h3>
    </div>
  );
};

export default CardFront;
