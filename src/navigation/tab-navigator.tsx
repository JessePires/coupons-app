import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton } from '../components/HeaderButton';

import Two from '../screens/two';
import Home from '~/screens/home';
import CustomTabBar from './customTabBar.component';
import HomeIcon from '~/assets/home.icon';
import PlanIcon from '~/assets/plan.icon';
import CouponsIcon from '~/assets/coupons.icon';
import FavoritesIcon from '~/assets/favorites.icon';
import ProfileIcon from '~/assets/profile.icon';
import { View } from 'react-native';

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
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
          headerShown: false,
        })}
      />
      <BottomTab.Screen
        name="Plans"
        component={Two}
        options={{
          title: 'Plano',
          tabBarIcon: ({ color }) => <PlanIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Coupons"
        component={Two}
        options={{
          title: 'Cupons',
          headerTitleStyle: {
            fontSize: 10,
          },
          tabBarIcon: ({ color }) => <CouponsIcon />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={Two}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <FavoritesIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Two}
        options={{
          title: 'Perfil',

          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tab;
