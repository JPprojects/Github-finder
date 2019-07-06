import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };

  onsubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onsubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            vlaue={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
