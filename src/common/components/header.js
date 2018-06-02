import React from 'react';
import GrommetHeader from 'grommet/components/Header';
import GrommetTitle from 'grommet/components/Title';
import GrommetBox from 'grommet/components/Box';
import GrommetMenu from 'grommet/components/Menu';
import GrommetAnchor from 'grommet/components/Anchor';

const Header = ({history, location}) => (
  <GrommetHeader>
    <GrommetTitle>
      Slayt
    </GrommetTitle>
    <GrommetBox flex={true}
      justify='end'
      direction='row'
      responsive={false}>
      <GrommetMenu responsive={true}
        inline={true}
        direction='row'
        size='medium'>
        <GrommetAnchor href='#'
          onClick={() => history.push('/')}
          className={location && location.pathname === '/' ? 'active' : ''}>
          Home
        </GrommetAnchor>
        <GrommetAnchor
          onClick={() => history.push('/search')}
          className={location && location.pathname === '/search' ? 'active' : ''}>
          Search
        </GrommetAnchor>
        <GrommetAnchor
          onClick={() => history.push('/playlists')}
          className={location && location.pathname === '/playlists' ? 'active' : ''}>
          My Playlists
        </GrommetAnchor>
        <GrommetAnchor
          onClick={() => history.push('/favourites')}
          className={location && location.pathname === '/favourites' ? 'active' : ''}>
          Favourites
        </GrommetAnchor>
      </GrommetMenu>
    </GrommetBox>
  </GrommetHeader>
);

Header.propTypes = {

};

export default Header;
