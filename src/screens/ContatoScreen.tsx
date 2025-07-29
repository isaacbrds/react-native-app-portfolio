import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export function ContatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.destaque}>Isaac Brigido Rodrigues dos Santos</Text>
      <Text style={{...styles.destaque, fontSize: 22, marginTop: 20,marginBottom: 20}}>Competências</Text>
      <Text style={styles.text}>Html</Text>
      <Text style={styles.text}>⭐⭐⭐⭐⭐</Text>
      <Text style={styles.text}>Ruby</Text>
      <Text style={styles.text}>⭐⭐⭐</Text>
      <Text style={styles.text}>Python</Text>
      <Text style={styles.text}>⭐⭐⭐</Text>
      <Text style={styles.text}>Nodejs</Text>
      <Text style={styles.text}>⭐⭐</Text>
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
    color: '#8184D2',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 5,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#8184D2',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
});