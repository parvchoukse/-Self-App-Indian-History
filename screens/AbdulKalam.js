import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class AbdulKalam extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"orange"}}> AbdulKalam</Text>
        <Text> </Text>
        <Text style={styles.points}>1) Avul Pakir Jainulabdeen Abdul Kalam was an Indian aerospace scientist and statesman who served as the 11th President of India from 2002 to 2007.{"\n"} He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering.</Text>
        <Text> </Text>
        <Text style={styles.points} >2)Born: 15 October 1931, Rameswaram
Died: 27 July 2015, Shillong {"\n"} Awards: Bharat Ratna, Veer Savarkar Award, Hoover Medal, MORE
Full name: Avul Pakir Jainulabdeen Abdul Kalam</Text>
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
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"lightblue",
    margin: 10,
    width: 200,
    height: 50,
  }
})