import React, { Component } from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import TagsScreen from './components/TagsScreen';
import SettingsScreen from './components/SettingsScreen';
import  * as colors from './constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const bottomNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Tags: TagsScreen,
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Tags') {
          iconName = 'assignment';
        }else if (routeName === 'Settings'){
          iconName = 'build'
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.alternativeTwo,
      inactiveTintColor: colors.dark,
      style: {
        borderTopWidth: 1,
        borderTopColor: colors.dark,
      }
    },
  }
);

const AppNavigator = createAppContainer(bottomNavigator);
export default AppNavigator;