import React from 'react';
import PropTypes from 'prop-types';
import GrommetBox from 'grommet/components/Box';
import GrommetFooter from 'grommet/components/Footer';
import GrommetParagraph from 'grommet/components/Paragraph';
import ExpandIcon from 'grommet/components/icons/base/Expand';

const Present = ({

}) => {
  const url = `http://www.youtube.com/embed/yuw_eHQ0cDE?rel=0`
  return (
    <div>
      <div style={{position: 'absolute', top: '12px', left: '12px'}}
        onClick={e => {}}>
        <ExpandIcon size='xsmall' colorIndex='unknown'/>
        <span style={{color: '#a8a8a8', fontSize: '12px'}}> Full-screen mode</span>
      </div>

      <GrommetBox align='center' pad='small'>
        <h1>Welcome title</h1>
      </GrommetBox>
      <iframe style={{width: '100%', height: '500px'}} src={url}></iframe>
      <div style={{color: '#a8a8a8', fontSize: '12px', position: 'absolute', bottom: '24px', left: 0, right: 0, textAlign: 'center'}}>
        © 2018 slayt
      </div>
    </div>
  );
};

Present.propTypes = {

};

export default Present;
