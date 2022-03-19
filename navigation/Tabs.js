import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens';

import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const CameraIcon = ({}) => {
  return (
    <View style={styles.cameraIconContainer}>
      <Image
        source={icons.camera}
        resizeMode="cover"
        style={styles.cameraIcon}
      />
    </View>
  );
};

const TabIcon = ({focused, route}) => {
  const getTintColor = focused => ({
    tintColor: focused ? COLORS.primary : COLORS.gray,
  });
  let icon;
  if (route === 'Home') icon = icons.flash;
  else if (route === 'Box') icon = icons.cube;
  else if (route === 'Search') icon = icons.search;
  else if (route === 'Favourite') icon = icons.heart;
  return (
    <Image source={icon} style={[styles.tabIcon, getTintColor(focused)]} />
  );
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: '10%',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => <TabIcon {...props} route="Home" />,
        }}
      />
      <Tab.Screen
        name="Box"
        component={Home}
        options={{
          tabBarIcon: props => <TabIcon {...props} route="Box" />,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Home}
        options={{
          tabBarIcon: props => <CameraIcon {...props} route="Camera" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: props => <TabIcon {...props} route="Search" />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Home}
        options={{
          tabBarIcon: props => <TabIcon {...props} route="Favourite" />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    height: 25,
    width: 25,
  },
  cameraIconContainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: COLORS.primary,
  },
  cameraIcon: {
    height: 23,
    width: 23,
  },
});

export default Tabs;
