import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
  },
  sort: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  sortText: {
    fontWeight: '600',
  },
  sortOption: {
    textTransform: 'capitalize',
  },
  filterOption: {
    borderColor: '#D2D5DF',
    marginRight: 8,
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D2D5DF',
    paddingVertical: 12,
  },
  cardImage: {
    display: 'flex',
    width: '15%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: {
    width: '85%',
    height: 60,
    justifyContent: 'space-between',
    padding: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  symbol: {
    color: '#AAA',
  },
  priceChanges: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  negative: {
    color: '#fe5b5a',
  },
  positive: {
    color: '#19cb22',
  },
});
