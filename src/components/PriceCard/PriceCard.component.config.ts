import PropTypes from 'prop-types';

const propTypes = {
  crypto: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  hourPrice: PropTypes.element.isRequired,
};

const defaultProps = {
  crypto: '',
  image: '',
  color: '',
  price: '',
  symbol: '',
  hourPrice: 0,
};

const displayName = 'PriceCard';

export default { propTypes, defaultProps, displayName };
