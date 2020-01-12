import React from 'react'

const CardBack = ({ name, imgLrg, age, email, city, country, phone }) => {
  return (
    <div className="card-back">
      <div className="left-content">
        <img src={imgLrg} alt={name}/>
        <p>{phone}</p>
      </div>
      <div className="right-content">
        <ul>
          <li>Age: {age}</li>
          <li>Email: {email}</li>
          <li>Location: {city}, {country}</li>
        </ul>
      </div>
    </div>
  )
}

export default CardBack;