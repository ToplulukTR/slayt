import React from 'react';
import PropTypes from 'prop-types';
import Video from './video';

const VideoList = ({
  videos
}) => {
  if (!videos || !videos.length) {
    return 'Search for videos!';
  }

  return (
    <div>
      {videos.map(video => <Video details={video} />)}
    </div>
  );
};

VideoList.propTypes = {

};

export default VideoList;
