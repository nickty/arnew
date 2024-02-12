/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreenStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabStack" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const SettingScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingScreen" component={BottomTabStack} />
    </Stack.Navigator>
  );
};

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home Screen',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Explore Screen',
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="settings"
              color={color}
              size={size}
            />
          ),*/
        }}
      />
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreenStack} />
        <Drawer.Screen
          name="SettingScreenStack"
          component={SettingScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
