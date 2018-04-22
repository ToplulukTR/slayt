import React from 'react';
import PropTypes from 'prop-types';
import GrommetTitle from 'grommet/components/title';
import GrommetFooter from 'grommet/components/Footer';
import GrommetParagraph from 'grommet/components/Paragraph';

const Footer = props => (
  <GrommetFooter justify='between' size='small'>
    <GrommetTitle>
      Slayt
    </GrommetTitle>
    <GrommetParagraph margin='none' align='center'>
      © 2018 Selman Kahya
    </GrommetParagraph>
  </GrommetFooter>
);

Footer.propTypes = {

};

export default Footer;
