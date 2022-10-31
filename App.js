import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';

import Mahatma from './screens/Mahatma';
import AbdulKalam from './screens/AbdulKalam';

import Ambedkar from './screens/Ambedkar';
import VallabhbhaiPatel from './screens/Vallabh';


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
  Mahatma: Mahatma,
   AbdulKalam: AbdulKalam,
  VallabhbhaiPatel:	VallabhbhaiPatel,
  Ambedkar: Ambedkar,
  
 
  
});

const AppContainer = createAppContainer(AppNavigator);
