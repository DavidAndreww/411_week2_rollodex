import React from 'react'

const ShowDetailsBtn = ({ toggleDetails }) => {
  return (
    <button className="details-button" onClick={() => toggleDetails()}>Show Details</button>
  )
}

export default ShowDetailsBtn;