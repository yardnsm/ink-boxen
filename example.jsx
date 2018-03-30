import { h, render } from 'ink';
import Boxen from './src';

render((
  <div>
    <Boxen
      text="I'm a box!"
      padding={2}
      margin={2}
      borderStyle="round"
    />
  </div>
));
