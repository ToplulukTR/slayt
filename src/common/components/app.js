import React from 'react';
import PropTypes from 'prop-types';
import GrommetApp from 'grommet/components/App';
import 'grommet/grommet.min.css';

import Home from '../containers/home';
import MyPlaylist from '../containers/my-playlist';
import Present from '../containers/present';

const App = props => (
  <GrommetApp>
    {/*
    <Home />
    <Present />
    */}

    <MyPlaylist />
  </GrommetApp>
);

App.propTypes = {

};

export default App;
