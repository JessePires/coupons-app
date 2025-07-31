import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton } from '../components/HeaderButton';
import { TabBarIcon } from '../components/TabBarIcon';

import Two from '../screens/two';
import Home from '~/screens/home';

const Tab = createBottomTabNavigator({
  screenOptions: function ScreenOptions() {
    return {
      tabBarActiveTintColor: 'black',
    };
  },
  screens: {
    One: {
      screen: Home,
      options: ({ navigation }) => ({
        title: 'Home',
        tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
        headerShown: false,
      }),
    },
    Two: {
      screen: Two,
      options: {
        title: 'Tab Two',
        tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
      },
    },
  },
});

export default Tab;
