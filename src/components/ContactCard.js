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
    let contacts = this.props.contacts;
    return (
      <div className="contact-card">
        <h1>
          {contacts.name.first} {contacts.name.last}
        </h1>
        {this.state.displayDetails ? (
          <CardBack contacts={contacts} />
        ) : (
          <CardFront contacts={contacts} />
        )}
        <button className="details-button" onClick={this.toggleDetails}>{this.state.displayDetails ? 'Hide Details' : 'Show Details'}</button>
        
      </div>
    );
  }
}

export default UserCard;
