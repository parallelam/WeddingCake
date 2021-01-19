import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Banner from './Banner/Banner';
import UserInfoList from 'container/UserInfoList/UserInfoList';

import '../styles/global.css';

export class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <Fragment>
        <Header />
        <Banner />
        <UserInfoList />
      </Fragment>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export default App;
