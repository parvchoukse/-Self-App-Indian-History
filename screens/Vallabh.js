import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class VallabhbhaiPatel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"lightblue"}}> VallabhbhaiPatel </Text>
        <Text> </Text>
        <Text style={styles.points}>1) Vallabhbhai Jhaverbhai Patel, commonly known as Sardar, was an Indian lawyer, influential political leader, barrister and statesman {"\n"} who served as the first Deputy Prime Minister of India and first Home Minister of India from 1947 to 1950. </Text>
        <Text> </Text>
        <Text style={styles.points} >2) Born: 31 October 1875, Nadiad
Died: 15 December 1950, Mumbai {"\n"} Children: Dahyabhai Patel, Maniben Patel</Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"lightpink",
    margin: 10,
    width: 200,
    height: 50,
  }
})