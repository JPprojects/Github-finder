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

  //search users
  const searchUsers = async text => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data
    });
  };

  //set user
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USER,
      payload: res.data
    });
  };

  //set laoding
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        respos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
