import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Menu, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useQuery } from 'react-query';

import { isEmpty } from 'lodash';

import Container from '../../components/Container/Container.component';
import PriceCard from '../../components/PriceCard/PriceCard.component';
import { getPriceChanges } from '../../core/actions/trade.action';
import { getSupportedCurrencies } from '../../core/actions/wallet.action';
import config from './Market.screen.config';
import { MARKET_CONSTANTS } from './Market.screen.constants';
import { styles } from './Market.screen.styles';
import { DataType } from './Market.screen.types';
import { mapCurrency } from './Market.screen.utils';

const Market = function () {
  const { tagCategories, filterOptions } = MARKET_CONSTANTS;

  const [resultData, setResultData] = React.useState([]);
  const [filter, setFilter] = React.useState('default');
  const [visible, setVisible] = React.useState(false);

  const supportedCurrencies = useQuery(
    'supportedCurrencies',
    getSupportedCurrencies,
  );
  const priceChanges = useQuery('priceChanges', getPriceChanges);

  const [
    { isLoading: loadingSupportedCurrencies, data: supportedCurrenciesData },
    { isLoading: loadingPriceChanges, data: priceChangesData },
  ] = [supportedCurrencies, priceChanges];

  const filterIDR = (value: { currencySymbol: string }) =>
    value.currencySymbol !== 'Rp';

  const getData = React.useMemo(
    () =>
      !loadingSupportedCurrencies &&
      !loadingPriceChanges &&
      supportedCurrenciesData.payload
        .filter(filterIDR)
        .map(mapCurrency(priceChangesData)),
    [
      loadingSupportedCurrencies,
      loadingPriceChanges,
      supportedCurrenciesData,
      priceChangesData,
    ],
  );

  const handleFilter = React.useCallback(() => {
    let filterResult = !isEmpty(getData) ? getData.slice() : [];

    switch (filter) {
      case 'name':
        filterResult = filterResult.sort(
          (a: { crypto: string }, b: { crypto: string }) =>
            a.crypto.localeCompare(b.crypto),
        );

        break;
      case 'price':
        filterResult = filterResult.sort(
          (a: { price: number }, b: { price: number }) => a.price - b.price,
        );
        break;
    }

    setResultData(filterResult);
    setFilter(filter);
    setVisible(false);
  }, [filter, getData]);

  React.useEffect(() => {
    if (loadingSupportedCurrencies && loadingPriceChanges) return;
    handleFilter();
  }, [loadingSupportedCurrencies, loadingPriceChanges, getData, handleFilter]);

  const handleMenu = () => setVisible(!visible);

  const renderPercentage = (percentage: number) => {
    const belowZero = percentage < 0;
    return (
      <>
        <Icon
          style={belowZero ? styles.negative : styles.positive}
          name={belowZero ? 'caret-down-outline' : 'caret-up-outline'}
          size={20}
        />
        <Text style={belowZero ? styles.negative : styles.positive}>
          {!isEmpty(percentage) ? percentage : 0}%
        </Text>
      </>
    );
  };

  return (
    <Container title="Market">
      <View style={styles.wrapper}>
        <View style={styles.filter}>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {tagCategories.map(tag => (
              <Button key={tag} mode="outlined" style={styles.filterOption}>
                {tag}
              </Button>
            ))}
          </ScrollView>
        </View>
        <View style={styles.sort}>
          <Text style={styles.sortText}>Sort by</Text>
          <Menu
            visible={visible}
            onDismiss={handleMenu}
            anchor={
              <Text style={styles.sortOption} onPress={handleMenu}>
                {filter} <Icon name="chevron-down" size={14} />
              </Text>
            }
          >
            {filterOptions.map(filter => (
              <Menu.Item
                key={filter}
                onPress={() => setFilter(filter)}
                title={filter}
                titleStyle={styles.sortOption}
              />
            ))}
          </Menu>
        </View>
        {!isEmpty(resultData) &&
          resultData.map((value: DataType) => (
            <PriceCard
              key={value.crypto}
              image={value.icon.image}
              color={value.icon.color}
              crypto={value.crypto}
              hourPrice={renderPercentage(value.hour)}
              price={value.price}
              symbol={value.symbol}
            />
          ))}
      </View>
    </Container>
  );
};

Market.defaultProps = config.defaultProps;
Market.displayName = config.displayName;
Market.propTypes = config.propTypes;

export default Market;
