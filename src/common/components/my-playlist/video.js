import React from 'react';
import PropTypes from 'prop-types';
import GrommetBox from 'grommet/components/Box';
import GrommetColumns from 'grommet/components/Columns';
import GrommetButton from 'grommet/components/Button';
import GrommetLayer from 'grommet/components/Layer';
import GrommetSelect from 'grommet/components/Select';
import AddIcon from 'grommet/components/icons/base/Add';
import FavoriteIcon from 'grommet/components/icons/base/Favorite';

const Video = ({
  details
}) => {
  const {id, title, description, thumbnailUrl} = details;
  const url = `http://www.youtube.com/embed/${id}?rel=0`

  return (
    <GrommetBox direction='row'>
      <GrommetBox basis='1/3' pad='none'>
        <GrommetBox pad='small'>
          <iframe style={{width: '100%'}} src={url}></iframe>
        </GrommetBox>
      </GrommetBox>
      <GrommetBox basis='2/3' pad='none'>
        <GrommetBox pad='small' align='center'>
          <h4>{title}</h4>
          <GrommetButton icon={<AddIcon />}
            label='Add to current playlist'
            onClick={() => {}}
            primary={false}
            secondary={false}
            accent={true}
            critical={false}
            plain={false} />
          <GrommetButton icon={<FavoriteIcon size='small' />}
            label='Save to favourites'
            onClick={() => {}}
            primary={false}
            secondary={false}
            accent={true}
            critical={false}
            plain={true}
            style={{fontSize: '12px', marginTop: '12px'}} />
        </GrommetBox>
     </GrommetBox>
   </GrommetBox>
  );
};

Video.propTypes = {

};

export default Video;
