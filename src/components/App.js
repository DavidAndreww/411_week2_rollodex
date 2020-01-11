import React from "react";
import UserCard from "./UserCard";

class App extends React.Component {
  state = {
    users: []
  };

  fetchData = () => {
    fetch("https://randomuser.me/api?results=25")
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .catch(err => console.log("Error:", err));
      
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>Rolodex</h1>
        <UserCard 
          users={this.state.users.results}
        />
      </div>
    );
  }
}

export default App;
