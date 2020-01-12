import React from "react";
import ContactCard from "./ContactCard";

class App extends React.Component {
  state = {
    contacts: [],
    counter: 0
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

  displayNewContact = key => {
    let counter = this.state.counter;
    key === 1 ? counter-- : counter++;
    if (counter >= 0 && counter <= this.state.contacts.results.length -1) {
      this.setState({ counter });
    } else {
      alert(`This is the last contact in the Rolodex`);
      return false;
    }
  };

  render() {
    let contacts = this.state.contacts;
    let index = this.state.counter;
    if (contacts.length === 0) {
      return <h1 className="loading">loading...please wait...</h1>;
    }

    return (
      <div className="app">
        <ContactCard
          firstName={contacts.results[index].name.first}
          lastName={contacts.results[index].name.last}
          imgSrc={contacts.results[index].picture.large}
        />
        <button onClick={() => this.displayNewContact(1)}>Left</button>
        <button onClick={() => this.displayNewContact(2)}>Right</button>
      </div>
    );
  }
}

export default App;
