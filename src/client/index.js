import React from 'react';
import { hydrate } from 'react-dom';
import Root from '../common/components/root';

hydrate(
  <Root />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
