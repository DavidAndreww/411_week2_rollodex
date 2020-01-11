import React from 'react';

class UserCard extends React.Component {
  state= {
    displayDetails: false,
  }
  render () {
    console.log(this.props.users[1])
    return (
      <div className="rolodex">
      <h1>hello</h1>
      </div>
    )
  }
}

export default UserCard;