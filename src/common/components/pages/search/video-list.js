import React from 'react';
import GrommetBox from 'grommet/components/Box';
import Video from '../../../containers/pages/search/video';

const VideoList = ({
  videos
}) => {
  if (!videos || !videos.length) {
    return (
      <GrommetBox basis='full' justify='center' align='center' style={{height: '40vh'}}>
        Search for videos!
      </GrommetBox>
    );
  }

  return videos.map((video, index) => <Video key={index} details={video} />)
};

VideoList.propTypes = {

};

export default VideoList;
