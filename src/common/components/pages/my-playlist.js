import React from 'react';
import debounce from 'lodash.debounce';
import GrommetSearch from 'grommet/components/Search';
import GrommetSection from 'grommet/components/Section';
import GrommetBox from 'grommet/components/Box';
import SpinningIcon from 'grommet/components/icons/Spinning';

import Header from '../header';
import Footer from '../footer';
import VideoList from './my-playlist/video-list';

const MyPlaylist = ({
  handleSearch, search = {}
}) => {
  const boundHandleSearch = debounce(handleSearch, 300);
  return (
    <div>
      <Header />
      <GrommetSection>
        <GrommetSearch placeHolder='Search for music/videos'
          inline={true}
          iconAlign='start'
          size='medium'
          value={search.keyword}
          fill={true}
          suggestions={[]}
          onDOMChange={e => boundHandleSearch(e.target.value)} />
      </GrommetSection>

      <GrommetBox align='center' pad='none' direction='row' wrap={true}>
        {search.loading ? (
          <SpinningIcon />
        ) : (
          <VideoList videos={search.list} />
        )}
      </GrommetBox>
      <Footer />
    </div>
  );
};

MyPlaylist.propTypes = {

};

export default MyPlaylist;
