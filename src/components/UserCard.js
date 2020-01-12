import React from "react";

class UserCard extends React.Component {
  state = {
    displayDetails: false
  };
  render() {
    return (
      <div className="rolodex">
        <h1>
          {this.props.firstName} {this.props.lastName}
        </h1>
        <img src={this.props.imgSrc} />
      </div>
    );
  }
}

export default UserCard;
