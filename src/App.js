import React, { Component } from 'react';
import Narbar from './Components/Users/Layout/Navbar';
import Users from './Components/Users/Users';
import axios from 'axios';
import Search from './Components/Users/Search';
import { async } from 'q';
import Alert from './Components/Users/Layout/Alert';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }

  //searches Github for users
  searchUsers = async text => {
    this.setState({ loading: true });

    console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //clear users
  clearUsers = () => this.setState({ users: [], loading: false });

  //set alert for no input
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div className='App'>
        <Narbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
