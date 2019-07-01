import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';
    const loading = false;
    const showName = true;

    return (
      <Fragment>
        {loading ? <h4>loading...</h4> : <h1>Hello {showName && name}</h1>}
      </Fragment>
    );
  }
}

export default App;
