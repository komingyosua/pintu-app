import React from 'react';
import { Platform, useWindowDimensions } from 'react-native';

function useViewDimension() {
  const { height } = useWindowDimensions();
  const [viewHeight, setViewHeight] = React.useState(0);

  const headerHeight = 60;
  const safeAreaHeight = Platform.select({
    ios: 89,
    android: 22,
    web: 0,
  });

  const safeContentHeight = height - (safeAreaHeight as number) - headerHeight;

  const onLayout = (e: { nativeEvent: { layout: { height: number } } }) =>
    setViewHeight(safeContentHeight - Math.ceil(e.nativeEvent.layout.height));

  return { viewHeight, safeContentHeight, onLayout };
}

export default useViewDimension;
