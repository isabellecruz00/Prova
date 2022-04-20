import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Você pressionou o botão: {count} vez(es)</Text>
      <Button title='Clique aqui' onPress={() => {setCount(count + 1)}}>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9e5af',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60
  }
});
