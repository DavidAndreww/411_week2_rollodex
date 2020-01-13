import React from 'react'

const HideDetailsBtn = ({ toggleDetails }) => {
  return (
    <button className="details-button" onClick={() => toggleDetails()} >Hide Details</button>
  )
}
export default HideDetailsBtn;