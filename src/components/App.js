import React from "react";
import UserCard from "./UserCard";

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
    console.log(users.results);
    if (users.length === 0) {
      return <h1 className="loading">loading...please wait...</h1>;
    }

    return (
      <div>
        <UserCard
          firstName={users.results[0].name.first}
          lastName={users.results[0].name.last}
          imgSrc={users.results[0].picture.large}
        />
      </div>
    );
  }
}

export default App;
