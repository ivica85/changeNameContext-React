import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  state = {
    username: "IvicaKralj123"
  };

  changeUserName = username => {
    this.setState({ username });
  };
  render() {
    return (
      <div>
        <Provider
          value={{
            username: this.state.username,
            changeUserName: this.changeUserName
          }}
        >
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
