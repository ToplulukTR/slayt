import React from 'react';
import GrommetBox from 'grommet/components/Box';
import GrommetSidebar from 'grommet/components/Sidebar';
import GrommetHeader from 'grommet/components/Header';
import GrommetTitle from 'grommet/components/Title';
import GrommetMenu from 'grommet/components/Menu';
import GrommetAnchor from 'grommet/components/Anchor';
import GrommetFooter from 'grommet/components/Footer';
import GrommetButton from 'grommet/components/Button';
import PlayIcon from 'grommet/components/icons/base/PlayFill';

const Sidebar = ({playlists}) => (
  <GrommetSidebar colorIndex='light-2'>
    <GrommetHeader pad='medium'
      justify='between'>
      <GrommetTitle>
        Current playlist
      </GrommetTitle>
    </GrommetHeader>
    <GrommetBox
      flex='grow'
      justify='start'
      margin='none'
    >
      <GrommetMenu primary={true}>
        <GrommetAnchor href='#'
          className='active'>
          Others can vote
        </GrommetAnchor>
        <GrommetAnchor href='#'>
          Welcome text:
        </GrommetAnchor>
        <GrommetButton icon={<PlayIcon />}
          label='Start playing!'
          onClick={() => {}}
          primary={true}
          secondary={false}
          accent={false}
          plain={false} />

        <GrommetButton icon={<PlayIcon />}
          label='Share playlist'
          onClick={() => {}}
          primary={true}
          secondary={false}
          accent={false}
          plain={false} />
      </GrommetMenu>
    </GrommetBox>

    <GrommetHeader pad='medium'
      justify='between'>
      <GrommetTitle>
        My playlists
      </GrommetTitle>
    </GrommetHeader>
    <GrommetBox flex='grow'
      justify='start'>
      <GrommetMenu primary={true}>
        {playlists.map((playlist, index) => (
          <GrommetAnchor href='#'className={index === 0 && 'active'}>
            {playlist}
          </GrommetAnchor>
        ))}
      </GrommetMenu>
    </GrommetBox>

    <GrommetFooter pad='medium'>
      <GrommetButton icon={<PlayIcon />} />
    </GrommetFooter>
  </GrommetSidebar>
);

Sidebar.propTypes = {

};

export default Sidebar;
