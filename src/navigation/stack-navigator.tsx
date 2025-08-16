import { createStackNavigator } from '@react-navigation/stack';
import { JSX } from 'react';
import Tab from './tab-navigator';
import CouponDetails from '~/screens/couponDetails/couponDetails.screen';
import ConsumeCoupon from '~/screens/consumeCoupon/consumeCoupon.screen';

const Stack = createStackNavigator();

const StackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tab} />
      <Stack.Screen name="CouponDetail" component={CouponDetails} />
      <Stack.Screen name="ConsumeCoupon" component={ConsumeCoupon} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
