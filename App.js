import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Keith');
  const [age, setAge] = useState('38');



  return (
    <View style={styles.container}>
      <Text>name: {name} age: {age}</Text>
      <Text>Enter Name:</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Enter your name'
      onChangeText={(val) => {setName(val)}} />

      <Text>Enter Age:</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input} 
      placeholder='Enter your age'
      onChangeText={(val) => {setAge(val)}} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
