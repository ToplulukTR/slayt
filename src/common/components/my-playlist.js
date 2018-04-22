import React from 'react';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import GrommetSearch from 'grommet/components/Search';
import GrommetSection from 'grommet/components/Section';
import GrommetSplit from 'grommet/components/Split';
import GrommetBox from 'grommet/components/Box';
import PlayIcon from 'grommet/components/icons/base/PlayFill';
import SpinningIcon from 'grommet/components/icons/Spinning';

import Sidebar from '../containers/sidebar';
import Header from './header';
import Footer from './footer';
import VideoList from './my-playlist/video-list';

const MyPlaylist = ({
  handleSearch, search
}) => {
  const boundHandleSearch = debounce(handleSearch, 300);
  return (
    <div>
      <Header />
      <GrommetSection>
        <GrommetSearch placeHolder='Search'
          inline={true}
          iconAlign='start'
          size='medium'
          value={search.keyword}
          fill={true}
          suggestions={[]}
          onDOMChange={e => boundHandleSearch(e.target.value)} />
      </GrommetSection>

      <GrommetSection>
        <GrommetSplit
          priority='left'
          flex='left'
          showOnResponsive='both'>
          <GrommetBox
            align='center'
            pad='medium'>

            {search.loading ? (
              <SpinningIcon />
            ) : (
              <VideoList videos={search.list} />
            )}
          </GrommetBox>
          <Sidebar />
        </GrommetSplit>
      </GrommetSection>
      <Footer />
    </div>
  );
};

MyPlaylist.propTypes = {

};

export default MyPlaylist;
