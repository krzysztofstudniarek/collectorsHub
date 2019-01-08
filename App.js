import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { 
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import AuthLoadingScreen from './src/components/AuthLoadingScreen'
import HomeScreen from './src/components/HomeScreen'
import CollectionsScreen from './src/components/CollectionsScreen'
import NewCollectionScreen from './src/components/NewCollectionScreen'
import SignInScreen from './src/components/SignInScreen'

const AppStack = createStackNavigator(
  { 
    Home: HomeScreen,
    Collections: CollectionsScreen,
    NewCollectionForm:  NewCollectionScreen
  });
const AuthStack = createStackNavigator(
  { 
    SignIn: SignInScreen 
  });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
