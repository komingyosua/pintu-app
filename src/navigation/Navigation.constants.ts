import Market from '../screens/Market/Market.screen';

export const NAVIGATION_CONSTANTS = Object.freeze({
  navigationList: [
    {
      name: 'Home',
      icon: 'home',
      component: Market,
    },
    {
      name: 'Discover',
      icon: 'newspaper',
      component: Market,
    },
    {
      name: 'Market',
      icon: 'poll',
      component: Market,
    },
    {
      name: 'Wallet',
      icon: 'wallet',
      component: Market,
    },
    {
      name: 'Account',
      icon: 'account',
      component: Market,
    },
  ],
});
