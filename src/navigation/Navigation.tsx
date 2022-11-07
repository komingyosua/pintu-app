import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { NAVIGATION_CONSTANTS } from './Navigation.constants';

const { navigationList } = NAVIGATION_CONSTANTS;

const Tab = createMaterialBottomTabNavigator();

const tabBarOptions = ({ icon }: { icon: string }) => ({
  options: {
    tabBarIcon: () => <Icon name={icon} size={24} />,
  },
});

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Market">
        {navigationList.map(navigation => (
          <Tab.Screen
            key={navigation.name}
            name={navigation.name}
            {...tabBarOptions({ icon: navigation.icon })}
            component={navigation.component}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
