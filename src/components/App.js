import React from "react";
import ContactCard from "./ContactCard";

class App extends React.Component {
  state = {
    contacts: [],
    counter: 0
  };

  // function to fetch data
  fetchData = () => {
    fetch("https://randomuser.me/api?results=25")
      .then(response => response.json())
      .then(parsedJSON => this.setState({ contacts: parsedJSON }))
      .catch(error => console.log("Error occured: ", error));
  };

  // when app component mounts, runs fetchData fuction
  componentDidMount() {
    this.fetchData();
  }

  // takes argument from the button that is clicked, (line 60 and 66) to determine if previous or next contact displays
  displayNewContact = key => {
    let counter = this.state.counter;
    let contactLength = this.state.contacts.results.length - 1;
    key === 1 ? counter-- : counter++;

    // ensures that counter, which is responsible for moving up and down array of contacts, cannot be less than 0 or larger than number of contacts in array
    if (counter >= 0 && counter <= contactLength) {
      this.setState({ counter });
    } else {
      alert(`This is the last contact in the Rolodex`);
      return false;
    }
  };

  render() {
    // if contact array is zero while data is being fetched, displays loading screen
    let index = this.state.counter;
    let contacts = this.state.contacts.results;
    if (this.state.contacts.length === 0) {
      return <h1 className="loading">loading...please wait...</h1>;
    }

    return (
      // index of contact to pull data from is equal to the counter, allows for prev and next contacts button to function
      <div className="app">
        <ContactCard
          firstName={contacts[index].name.first}
          lastName={contacts[index].name.last}
          imgLrg={contacts[index].picture.large}
          phone={contacts[index].cell}
          email={contacts[index].email}
          age={contacts[index].dob.age}
          city={contacts[index].location.city}
          country={contacts[index].location.country}
        />
        <button
          className="change-contact-button"
          onClick={() => this.displayNewContact(1)}
        >
          Previous
        </button>
        <button
          className="change-contact-button"
          onClick={() => this.displayNewContact(2)}
        >
          Next
        </button>
      </div>
    );
  }
}

export default App;
