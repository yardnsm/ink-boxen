import { oneOf, shape } from 'prop-types';

export const colorsPropType = (background = false) =>
  oneOf([
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
    ...(background ? [] : ['grey']),
  ]);

export const objectKeysPropType = (keys, type) =>
  // eslint-disable-next-line no-param-reassign, no-return-assign
  shape(keys.reduce((obj, key) => obj[key] = type, {}));
