import React, { Component } from "react";
import Header from "./Header";
import { UserContextConsumer } from "./userContext";

class App extends Component {
  state = {
    newUsername: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Header />
        <UserContextConsumer>
          {({ username, changeUserName }) => (
            <main>
              <p className="main"> Nema novih notifikacija, {username} 🎉</p>
              <input
                type="text"
                name="newUsername"
                value={this.state.newUsername}
                onChange={this.handleChange}
              />
              <button onClick={()=> changeUserName(this.state.newUsername)}>Change Username</button>
            </main>
          )}
        </UserContextConsumer>
      </div>
    );
  }
}

export default App;
