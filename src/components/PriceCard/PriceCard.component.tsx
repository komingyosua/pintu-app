import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import { NumericFormat } from 'react-number-format';

import config from './PriceCard.component.config';
import { styles } from './PriceCard.component.styles';
import { IPriceCard } from './PriceCard.component.types';

const PriceCard = ({
  crypto,
  image,
  color,
  price,
  symbol,
  hourPrice,
}: IPriceCard) => {
  return (
    <TouchableOpacity key={crypto} style={styles.cardWrapper}>
      <View style={styles.cardImage}>
        <SvgUri width={36} height={36} uri={image} color={color} />
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.row}>
          <Text style={styles.titleText}>{crypto}</Text>
          <NumericFormat
            value={price}
            displayType="text"
            allowLeadingZeros={false}
            thousandSeparator="."
            decimalSeparator=","
            fixedDecimalScale
            prefix="Rp "
            renderText={result => (
              <Text style={styles.titleText}>{result}</Text>
            )}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.symbol}>{symbol}</Text>
          <View style={styles.priceChanges}>{hourPrice}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

PriceCard.defaultProps = config.defaultProps;
PriceCard.displayName = config.displayName;
PriceCard.propTypes = config.propTypes;

export default PriceCard;
