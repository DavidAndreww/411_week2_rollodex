import React from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import HideDetailsBtn from "./HideDetailsBtn";
import ShowDetailsBtn from "./ShowDetailsBtn";

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
        {this.state.displayDetails ?
          <CardBack 
            imgMed={this.props.imgMed} 
            age={this.props.age} 
            email={this.props.email} 
            city={this.props.city} 
            country={this.props.country} 
           firstName={this.props.firstName} 
           lastName={this.props.lastName} 
         /> : 
          <CardFront 
            firstName={this.props.firstName} 
            lastName={this.props.lastName} 
           imgLrg={this.props.imgLrg} 
         />}
        {this.state.displayDetails ? <HideDetailsBtn /> : <ShowDetailsBtn />}
      </div>
    );
  }
}

export default UserCard;
