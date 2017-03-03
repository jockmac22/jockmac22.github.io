import React, { Component } from 'react';
import './App.css';

function formatName(user) {
  return user.firstName + " " +  user.lastName;
}

const user = {
  firstName: "Jocko",
  lastName: "MacGregor"
}

const element = (
  <div>
    <h1>Hello, {formatName(user)}</h1>
  </div>
);


class App extends Component {
  render() {
    return (
      element
    );
  }
}

export default App;
