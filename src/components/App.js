import React from "react";
import ContactCard from "./ContactCard";

class App extends React.Component {
  state = {
    contacts: []
  };

  fetchData = () => {
    fetch("https://randomuser.me/api?results=25")
      .then(response => response.json())
      .then(parsedJSON => this.setState({ contacts: parsedJSON }))
      .catch(error => console.log("Error occured: ", error));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let contacts = this.state.contacts;
    console.log(contacts.results);
    if (contacts.length === 0) {
      return <h1 className="loading">loading...please wait...</h1>;
    }

    return (
      <div className="app">
        <ContactCard
          firstName={contacts.results[0].name.first}
          lastName={contacts.results[0].name.last}
          imgSrc={contacts.results[0].picture.large}
        />
        <button>Left</button>
        <button>Right</button>
      </div>
    );
  }
}

export default App;
