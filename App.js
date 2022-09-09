import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';



import HomeScreen from './Screens/HomeScreen';
import Uniform from './Screens/Uniform';
import Activities from './Screens/Activities';
import AboutSchool from './Screens/AboutSchool';

export default class App extends React.Component {
  render() {
    return (
      <View>
      
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
 Uniform:Uniform,
  Activities: Activities,
  AboutSchool:AboutSchool,
 
});

const AppContainer = createAppContainer(AppNavigator);
