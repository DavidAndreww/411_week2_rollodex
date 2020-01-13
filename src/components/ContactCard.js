import React from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import HideDetailsBtn from "./HideDetailsBtn";
import ShowDetailsBtn from "./ShowDetailsBtn";

class UserCard extends React.Component {
  state = {
    displayDetails: false
  };

  // toggles state of displayDetails to allow for rendering of different sides of contact card
  toggleDetails = () => {
    this.setState({ displayDetails: !this.state.displayDetails });
  };

  render() {
    return (
      <div className="contact-card">
        <h1>
          {this.props.firstName} {this.props.lastName}
        </h1>
        {this.state.displayDetails ? (
          <CardBack
            name={this.props.firstName}
            imgLrg={this.props.imgLrg}
            age={this.props.age}
            email={this.props.email}
            city={this.props.city}
            country={this.props.country}
            phone={this.props.phone}
          />
        ) : (
          <CardFront
            name={this.props.firstName}
            imgLrg={this.props.imgLrg}
            phone={this.props.phone}
          />
        )}
        {this.state.displayDetails ? (
          <HideDetailsBtn toggleDetails={this.toggleDetails} />
        ) : (
          <ShowDetailsBtn toggleDetails={this.toggleDetails} />
        )}
      </div>
    );
  }
}

export default UserCard;
