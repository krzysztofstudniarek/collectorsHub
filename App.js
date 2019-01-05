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

import AuthLoadingScreen from './components/AuthLoadingScreen'
import HomeScreen from './components/HomeScreen'
import CollectionsScreen from './components/CollectionsScreen'
import NewCollectionScreen from './components/NewCollectionScreen'
import SignInScreen from './components/SignInScreen'

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
