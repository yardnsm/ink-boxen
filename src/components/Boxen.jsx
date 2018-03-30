import boxen from 'boxen';
import PropTypes from 'prop-types';
import { colorsPropType, objectKeysPropType } from '../prop-types';

const Boxen = (props) => {
  const { text } = props;

  return (
    boxen(text, Object.assign({}, props))
  );
};

Boxen.defaultProps = {
  text: '',
};

Boxen.propTypes = {
  text: PropTypes.string,
  dimBorder: PropTypes.bool,
  borderColor: colorsPropType(),
  backgroundColor: colorsPropType(true),
  float: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
  borderStyle: PropTypes.oneOfType([
    PropTypes.oneOf([
      'single',
      'double',
      'round',
      'single-double',
      'double-single',
      'classic',
    ]),
    objectKeysPropType([
      'topLeft',
      'topRight',
      'bottomLeft',
      'bottomRight',
      'horizontal',
      'vertical',
    ], PropTypes.string),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.number,
    objectKeysPropType([
      'top',
      'right',
      'bottom',
      'left',
    ], PropTypes.number),
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.number,
    objectKeysPropType([
      'top',
      'right',
      'bottom',
      'left',
    ], PropTypes.number),
  ]),
};

export default Boxen;
