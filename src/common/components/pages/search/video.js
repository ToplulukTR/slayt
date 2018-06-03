import React from 'react';
import YouTube from 'react-youtube';
import GrommetBox from 'grommet/components/Box';
import GrommetSelect from 'grommet/components/Select';
import GrommetHeading from 'grommet/components/Heading';
import FavoriteIcon from 'grommet/components/icons/base/Favorite';

const titleStyle = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: '290px',
};

const durationStyle = {
  backgroundColor: '#f2f2f2',
  fontSize: '12px',
  padding: '4px 5px',
  borderRadius: '4px',
};

const Video = ({
  details, saveLiked, isLiked, liked, playlists, addVideoToPlaylist
}) => {

  const {id, title} = details;
  const opts = {
    height: '250',
    width: '100%',
    playerVars: {
      modestbranding: 1,
    }
  };
  let playlistsClone = playlists.map(playlist => playlist.name).slice();
  playlistsClone.push('Create a new playlist >');

  const onDropdownChange = ({value}) => {
    const playlist = playlists.find(playlist => playlist.name === value);
    return addVideoToPlaylist(id, playlist.id);
  };

  return (
    <GrommetBox direction='column' pad='medium' basis='1/2'>
      <GrommetBox direction='row' pad='none' justify='between' responsive={false}>
        <GrommetHeading tag='h5' style={titleStyle}>{title}</GrommetHeading>
        <div>
          <span style={durationStyle}>
            1:12
          </span>
        </div>
      </GrommetBox>
      <GrommetBox direction='column' pad='none'>
        <GrommetBox pad='none'>
          <GrommetBox pad='none'>
            <YouTube
              videoId={id}
              opts={opts}
              onReady={() => {}}
            />
          </GrommetBox>
        </GrommetBox>
        <GrommetBox pad={{horizontal: 'none', vertical: 'small'}} direction='row' align='center' responsive={false}>
          <GrommetBox flex='grow'>
            <GrommetSelect placeHolder='Add to playlist +'
              options={playlistsClone}
              value={''}
              onChange={onDropdownChange}
              style={{width: '100%'}}
            />
          </GrommetBox>
          <FavoriteIcon
            colorIndex={isLiked ? 'neutral-2' : 'grey-4'}
            size='small'
            style={{marginLeft: '12px', cursor: 'pointer'}}
            onClick={e => saveLiked(liked, id)} />
       </GrommetBox>
     </GrommetBox>
   </GrommetBox>
  );
};

Video.propTypes = {

};

export default Video;
