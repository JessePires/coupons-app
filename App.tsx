import './global.css';

import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useMemo } from 'react';

import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from '~/navigation/stack-navigator';

export default function App() {
  const colorScheme = useColorScheme();
  const theme = useMemo(() => (colorScheme === 'dark' ? DarkTheme : DefaultTheme), [colorScheme]);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
