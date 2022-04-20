import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
        <View style={styles.quadro1}>
           <Text>1º Quadro</Text>
        </View>

        <View style={styles.quadro2}>
          <Text>2º Quadro</Text>
        </View>

        <View style={styles.quadro3}>
          <Text>3º Quadro</Text>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30
  },
  quadro1:{
    width: 70,
    height: 70,
    backgroundColor: '#a7c686',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quadro2:{
    width: 70,
    height: 70,
    backgroundColor: '#c9e5af',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quadro3:{
    width: 70,
    height: 70,
    backgroundColor: '#dceeb1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
