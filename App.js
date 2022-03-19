import React, {useEffect} from 'react';
import {useColorScheme, Text, LogBox} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './navigation/Tabs';

// Screens
import {PlantDetail} from './screens';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    LogBox.ignoreLogs(['Looks like you']);
    return () => {};
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Tabs">
        {/* Tabs */}
        <Stack.Screen name="Tabs" component={Tabs} />

        <Stack.Screen name="PlantDetail" component={PlantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
