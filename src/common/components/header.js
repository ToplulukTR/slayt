import React from 'react';
import GrommetHeader from 'grommet/components/Header';
import GrommetTitle from 'grommet/components/Title';
import GrommetBox from 'grommet/components/Box';
import GrommetMenu from 'grommet/components/Menu';
import GrommetAnchor from 'grommet/components/Anchor';

const Header = props => (
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
          className='active'>
          Home
        </GrommetAnchor>
        <GrommetAnchor href='#'>
          My Playlists
        </GrommetAnchor>
        <GrommetAnchor href='#'>
          Favourites
        </GrommetAnchor>
      </GrommetMenu>
    </GrommetBox>
  </GrommetHeader>
);

Header.propTypes = {

};

export default Header;
