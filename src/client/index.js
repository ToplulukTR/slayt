import { hydrate } from 'react-dom';
import {getRoot} from '../common/components/root';

hydrate(
  getRoot(),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
