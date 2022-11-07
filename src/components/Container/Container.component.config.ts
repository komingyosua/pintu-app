import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {};

const displayName = 'Continaer';

export default { propTypes, defaultProps, displayName };
