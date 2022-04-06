import * as React from 'react';
import {Text, View, TouchableOpacit, } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WeatherScreen from './screens/WeatherScreen';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      weather:''
    }
  }
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    );
  }
}
const AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  WeatherScreen:WeatherScreen,
  AboutScreen:AboutScreen,
});

const AppContainer = createAppContainer(AppNavigator);