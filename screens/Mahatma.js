import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Mahatma extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"#F6CA2E"}}> Mahatma Gandhi </Text>
        <Text> </Text>
        <Text style={styles.points}>1) Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist. He is widely acknowledged as {"\n"} one of the 20th century's most influential people, who employed nonviolent ...</Text>
        <Text> </Text>
        <Text style={styles.points} >2)Born: 2 October 1869, Porbandar
Assassinated: 30 January 1948, Birla House, New Delhi{"\n"} Children: Harilal Gandhi, Devdas Gandhi, Manilal Gandhi, Ramdas Gandhi</Text>
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
    backgroundColor:'#00FFFF',
    margin: 10,
    width: 200,
    height: 50,
  }
})