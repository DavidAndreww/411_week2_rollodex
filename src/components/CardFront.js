import React from 'react'

const CardFront = ({ imgLrg, phone, name }) => {
  return (
    <React.Fragment>
      <img class="large-photo" src={imgLrg} alt={name} />
      <h3>{phone}</h3>
    </React.Fragment>
  )
}

export default CardFront