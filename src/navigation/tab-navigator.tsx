import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton } from '../components/HeaderButton';
import { TabBarIcon } from '../components/TabBarIcon';

import Two from '../screens/two';
import Home from '~/screens/home';
import CustomTabBar from './customTabBar.component';

const BottomTab = createBottomTabNavigator();

// const Tab = createBottomTabNavigator({
//   screenOptions: function ScreenOptions() {
//     return {
//       tabBarActiveTintColor: '#EE4D2D',
//     };
//   },
//   screens: {
//     One: {
//       screen: Home,
//       options: ({ navigation }) => ({
//         title: 'Home',
//         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
//         headerShown: false,
//       }),
//     },
//     Two: {
//       screen: Two,
//       options: {
//         title: 'Tab Two',
//         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//       },
//     },
//   },
// });

const Tab = () => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: '#EE4D2D',
      }}>
      <BottomTab.Screen
        name="One"
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="Two"
        component={Two}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tab;
