import React from 'react'

const CardFront = ({ imgLrg, phone, name }) => {
  return (
    <React.Fragment>
      <img src={imgLrg} alt={name} />
      <h3>{phone}</h3>
    </React.Fragment>
  )
}

export default CardFront