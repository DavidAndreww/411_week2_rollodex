import React from "react";
// import UserCard from "./UserCard";

class App extends React.Component {
  state = {
    users: []
  };

  fetchData = () => {
    fetch("https://randomuser.me/api?results=25")
      .then(response => response.json())
      .then(parsedJSON => this.setState({ users: parsedJSON }))
      .catch(error => console.log("Error occured: ", error));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let users = this.state.users;
    console.log(this.state.users)
    if (users.length === 0) {
      return <p>loading...please wait...</p>
    }
  
    return (
      <div>
        <h1>rolodex</h1>
      </div>
    );
  }
}

export default App;
