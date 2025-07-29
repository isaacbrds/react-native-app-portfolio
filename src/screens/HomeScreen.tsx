import React from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';



export function Homescreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/eu.jpeg')} style={{ width: 100, height: 100, borderRadius: 20, marginBottom: 20}} />
      <Text style={styles.destaque}>Isaac Brigido Rodrigues dos Santos</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('https://www.linkedin.com/in/isaac-br%C3%ADgido-desenvolvedor/')}>
        Linkedin
      </Text>
      <Text style={styles.text} onPress={() => Linking.openURL('https://github.com/isaacbrds')}>Github</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B33',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  destaque: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#8384A7',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 5,
  },

  text: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#8384A7',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
  },
});