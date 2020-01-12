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
    let contactLength = this.state.contacts.results.length - 1;
    key === 1 ? counter-- : counter++;

    if (counter >= 0 && counter <= contactLength) {
      this.setState({ counter });
    } else {
      alert(`This is the last contact in the Rolodex`);
      return false;
    }
  };

  render() {
    let index = this.state.counter;
    let contacts = this.state.contacts.results;
    if (this.state.contacts.length === 0) {
      return <h1 className="loading">loading...please wait...</h1>;
    }

    return (
      <div className="app">
        <ContactCard
          firstName={contacts[index].name.first}
          lastName={contacts[index].name.last}
          imgLrg={contacts[index].picture.large}
          imgMed={contacts[index].picture.medium}
          phone={contacts[index].cell}
          email={contacts[index].email}
          age={contacts[index].dob.age}
          city={contacts[index].location.city}
          country={contacts[index].location.country}
        />
        <button onClick={() => this.displayNewContact(1)}>Left</button>
        <button onClick={() => this.displayNewContact(2)}>Right</button>
      </div>
    );
  }
}

export default App;
