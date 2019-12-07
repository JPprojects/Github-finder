import React, { useReducer } from 'react';
import axios from 'axios';
import GitHubReducer from './githubReducer';
import {
  SEARCH_USER,
  GET_USER,
  CLEAR_USER,
  GET_REPOS,
  SET_LOADING
} from '../types';
import githubContext from './githubcontext';

const GithubState = props => {
  const intialState = {
    user: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GitHubReducer, intialState);

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        respos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
