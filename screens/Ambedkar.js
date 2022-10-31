import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class Ambedkar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"yellow"}}> Ambedkar </Text>
        <Text> </Text>
        <Text style={styles.points}>1) Bhimrao Ramji Ambedkar was an Indian jurist, economist, social reformer and political leader who headed the committee {"\n"} drafting the Constitution of India from the Constituent Assembly debates, served as ... </Text>
        <Text> </Text>
        <Text style={styles.points} >2) Born: 14 April 1891, Dr. Ambedkar Nagar
Died: 6 December 1956, New Delhi {"\n"} Education: Columbia University (1927), MORE
Children: Yashwant Ambedkar</Text>
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
    backgroundColor:"#F53838",
    margin: 10,
    width: 200,
    height: 50,
  }
})