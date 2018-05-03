import React from 'react';
import GrommetTitle from 'grommet/components/Title';
import GrommetFooter from 'grommet/components/Footer';
import GrommetParagraph from 'grommet/components/Paragraph';

const Footer = props => (
  <GrommetFooter justify='between' size='small'>
    <GrommetTitle>
    </GrommetTitle>
    <GrommetParagraph margin='none' align='center' style={{fontSize: '12px'}}>
      © 2018 Selman Kahya
    </GrommetParagraph>
  </GrommetFooter>
);

Footer.propTypes = {

};

export default Footer;
