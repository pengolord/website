/* @refresh reload */
import { render } from 'solid-js/web';
import 'solid-devtools';

import './index.scss';

const root = document.getElementById('root');
render(
  () => <main>
    <h1>Hello!!</h1>
  </main>,
  root!
);
