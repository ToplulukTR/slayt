import React from 'react';
import YouTube from 'react-youtube';
import debounce from 'lodash.debounce';
import GrommetSearch from 'grommet/components/Search';
import GrommetSection from 'grommet/components/Section';
import GrommetBox from 'grommet/components/Box';
import UpIcon from 'grommet/components/icons/base/Up';
import DownIcon from 'grommet/components/icons/base/Down';


import Header from '../header';
import Footer from '../footer';
import Video from '../../containers/pages/search/video';

const MyPlaylist = ({history, location, playlists, vote}) => {
  const opts = {
    height: '250',
    width: '100%',
    playerVars: {
      modestbranding: 1,
    }
  };

  return (
    <div>
      <Header history={history} location={location} />
      {playlists && playlists.map(playlist => {
        return (
          <div>
            <h4>{playlist.name}</h4>
            {playlist.videos.map(video => {
              return (
                <div>
                  <UpIcon
                    colorIndex='grey-4'
                    size='small'
                    style={{marginLeft: '12px', cursor: 'pointer'}}
                    onClick={e => vote(video.id, playlist.id, true)} />
                  <DownIcon
                    colorIndex='grey-4'
                    size='small'
                    style={{marginLeft: '12px', cursor: 'pointer'}}
                    onClick={e => vote(video.id, playlist.id, false)} />
                  {video.vote}
                  <YouTube
                    videoId={video.id}
                    opts={opts}
                    onReady={() => {}}
                  />

                </div>
              );
            })}
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

MyPlaylist.propTypes = {

};

export default MyPlaylist;
