import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useWindowDimensions,
} from 'react-native';

import useViewDimension from '../../hooks/useViewDimension';
import Header from '../Header/Header.component';
import config from './Container.component.config';
import { styles } from './Container.component.styles';
import { IContainer } from './Container.component.types';

const Container = ({ children, title }: IContainer) => {
  const { height } = useWindowDimensions();
  const { onLayout } = useViewDimension();

  return (
    <SafeAreaView
      style={{
        height,
      }}
    >
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Header title={title} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View onLayout={onLayout} style={styles.wrapper}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Container.defaultProps = config.defaultProps;
Container.displayName = config.displayName;
Container.propTypes = config.propTypes;

export default Container;
