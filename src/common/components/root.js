import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from '../store/configureStore';

import GrommetApp from 'grommet/components/App';
import GrommetBox from 'grommet/components/Box';
import 'grommet/grommet.min.css';

import App from '../containers/app';
import Favourites from '../containers/pages/favourites';
import Home from '../containers/pages/home';
import MyPlaylist from '../containers/pages/my-playlist';
import Present from '../containers/pages/present';
import Search from '../containers/pages/search';

class Root extends React.Component {
  render() {
    const history = createHistory();
    const store = configureStore(history, window.__PRELOADED_STATE__);
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App>
            <GrommetApp>
              <GrommetBox pad={{vertical: 'small', horizontal: 'medium'}}>
                <Route exact path="/" component={Home}/>
                <Route path="/favourites" component={Favourites}/>
                <Route path="/search" component={Search}/>
                <Route path="/playlists" component={MyPlaylist}/>
                <Route path="/present" component={Present}/>
              </GrommetBox>
            </GrommetApp>
          </App>
        </ConnectedRouter>
      </Provider>
    );
  }
};

export default Root;
