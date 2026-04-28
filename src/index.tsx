/* @refresh reload */
import { render } from 'solid-js/web';
import 'solid-devtools';

import App from './App';
import './index.scss';

const root = document.getElementById('root');
render(
  () => <>
    <App />
  </>,
  root!
);
