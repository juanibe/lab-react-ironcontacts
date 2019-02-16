import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsTable from './ContactsTable';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ironcontacts</h1>
        <ContactsTable/>
      </div>
    );
  }
}

export default App;
