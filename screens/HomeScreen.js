import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      
      <SafeAreaView style = {styles.containers}>
        <View style = {styles.container}>
          <Text style = {styles.headingText}>Weather App</Text>
          
          <TouchableOpacity 
          onPress = {() => {
            this.props.navigation.navigate("WeatherScreen")
          }} 
          style = {styles.weather_btn}>
          <Image source={require('../assets/weatherDroplet.png')} style = {styles.whitedropimage}/>

          </TouchableOpacity>



          <TouchableOpacity onPress = {() => {
            this.props.navigation.navigate("AboutScreen")
          }} style = {styles.about_btn}><Text style = {styles.about_btn_Text}>About</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
      
    );
  }
}


const styles=styleSheet.create({})