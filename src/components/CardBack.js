import React from "react";

const CardBack = ({ contacts }) => {
  return (
    <div className="card-back">
      <div className="left-content">
        <img src={contacts.picture.large} alt={contacts.name.first} />
        <p>{contacts.phone}</p>
      </div>
      <div className="right-content">
        <ul>
          <li>Age: {contacts.dob.age}</li>
          <li>Email: {contacts.email}</li>
          <li>
            Location: {contacts.location.city}, {contacts.location.country}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardBack;
