import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Homescreen } from './src/screens/HomeScreen';
import { ContatoScreen } from './src/screens/ContatoScreen';
import { Routes } from './src/routes';


export default function App() {
  return (
      <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
