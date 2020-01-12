import React from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import HideDetailsBtn from "./HideDetailsBtn";
import ShowDetailsBtn from "./ShowDetailsBtn";

class UserCard extends React.Component {
  state = {
    displayDetails: true
  };
  render() {
    return (
      <div className="contactCard">
        <h1>
          {this.props.firstName} {this.props.lastName}
        </h1>
        {this.state.displayDetails ?
          <CardBack 
            name={this.props.firstName}
            imgLrg={this.props.imgLrg} 
            age={this.props.age} 
            email={this.props.email} 
            city={this.props.city} 
            country={this.props.country}
            phone={this.props.phone} 
         /> : 
          <CardFront 
           name={this.props.firstName}
           imgLrg={this.props.imgLrg}
           phone={this.props.phone} 
         />}
        {this.state.displayDetails ? <HideDetailsBtn /> : <ShowDetailsBtn />}
      </div>
    );
  }
}

export default UserCard;
