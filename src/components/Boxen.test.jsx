import { h, renderToString } from 'ink';
import Boxen from './Boxen';

const compare = (actual, expected) =>
  expect(actual.trim()).toMatch(expected.trim());

describe('<Boxen />', () => {
  it('should render', () => {
    const actual = renderToString((<Boxen />));
    const expected = `
┌┐
││
└┘
    `;

    compare(actual, expected);
  });

  it('should accept props and render accordingly', () => {
    const actual = renderToString((
      <Boxen
        text="foo"
        padding={1}
        margin={1}
        borderStyle="round"
      />
    ));

    const expected = `
   ╭─────────╮
   │         │
   │   foo   │
   │         │
   ╰─────────╯
    `;

    compare(actual, expected);
  });
});
