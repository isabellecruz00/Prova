import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {

  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Qual o seu nome? </Text>
      <TextInput onChangeText={(value) =>{
        setName(value);
      }}>
      </TextInput>
      <Button title='Diga Olá' onPress={() => {
        alert(`Olá ${name}!`);
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60
  },
  headerText: {
    fontWeight: 'bold'
  },
  TextInput: {
    width: 100,
    borderColor: '#add8e6'
  }
});
