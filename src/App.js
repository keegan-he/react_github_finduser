import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
