import React from 'react';
import GrommetBox from 'grommet/components/Box';
import GrommetButton from 'grommet/components/Button';
import GrommetHero from 'grommet/components/Hero';
import GrommetHeading from 'grommet/components/Heading';
import GrommetImage from 'grommet/components/Image';
import GrommetSection from 'grommet/components/Section';
import GrommetCard from 'grommet/components/Card';

import PlayIcon from 'grommet/components/icons/base/PlayFill';

import 'grommet/grommet.min.css';

const Home = ({
  history,
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement,
  counter,
}) => (
  <div>
    <GrommetHero background={<GrommetImage src='/hero.jpg'
      fit='cover'
      full={true} />}
      backgroundColorIndex='dark'
      size='small'>
      <GrommetBox direction='row'
        justify='center'
        align='center'>
        <GrommetBox basis='1/2'
          align='start'
          pad='medium'>
          <GrommetHeading margin='none' strong={true} >
            Create beatiful slides in a min!
          </GrommetHeading>
        </GrommetBox>
        <GrommetBox basis='1/2'
          align='end'
          pad='medium' />
       </GrommetBox>
    </GrommetHero>

    <GrommetSection>
      <GrommetBox pad='medium' colorIndex='light-2' align='center'>
        <GrommetButton icon={<PlayIcon />}
          label='Create your playlist!'
          onClick={() => history.push('/playlists')}
          primary={true}
          secondary={false}
          accent={false}
          plain={false} />
      </GrommetBox>
    </GrommetSection>

    <GrommetSection>
      <GrommetBox direction='row'
        justify='center'
        align='center'>
        <GrommetCard thumbnail='/hero.jpg'
          description='Sample description providing more details.'
          contentPad='small'
          pad="medium"
          basis='1/3'
        />
        <GrommetCard thumbnail='/hero.jpg'
          description='Sample description providing more details.'
          contentPad='small'
          pad="medium"
          basis='1/3'
        />
         <GrommetCard thumbnail='/hero.jpg'
          description='Sample description providing more details.'
          contentPad='small'
          pad="medium"
          basis='1/3'
        />
      </GrommetBox>
    </GrommetSection>
  </div>
);

Home.propTypes = {

};

export default Home;
