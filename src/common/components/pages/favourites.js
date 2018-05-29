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

const Favourites = ({history, location, liked}) => {
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
      <div>
        {liked.map(videoId => {
          return (
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={() => {}}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

Favourites.propTypes = {

};

export default Favourites;
