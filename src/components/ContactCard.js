import React from "react";
import CardBack from './CardBack'
import CardFront from './CardFront'

class UserCard extends React.Component {
  state = {
    displayDetails: false
  };
  render() {
    return (
      <div className="contactCard">
        <h1>
          {this.props.firstName} {this.props.lastName}
        </h1>
        {this.state.displayDetails ? (<CardBack />) : (<CardFront />)}
      </div>
    );
  }
}

export default UserCard;
