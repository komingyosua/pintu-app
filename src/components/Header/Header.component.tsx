import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Octicons';

import config from './Header.component.config';
import { styles } from './Header.component.styles';
import { IHeader } from './Header.componnent.types';

const Header = ({ title }: IHeader) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.action}>
        <Icon name="star" size={28} style={styles.star} />
        <Icon name="search" size={28} />
      </View>
    </View>
  );
};

Header.defaultProps = config.defaultProps;
Header.displayName = config.displayName;
Header.propTypes = config.propTypes;

export default Header;
