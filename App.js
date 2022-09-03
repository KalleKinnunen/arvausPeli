import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

let secret;
let guesses;

export default function App() {
  const [input, setInput] = useState('');
  const [guidance, setGuidance] = useState('');
  
  const init = () => {
    setGuidance('Guess a number between 1-100');
    guesses = 0;
    secret = Math.floor(Math.random() * 100) +1;

  }

  useEffect(() => {
    init();
   }, []);

   const makeGuess = () => {

    const guess = Number(input);
    console.log('Guess', guess);
    guesses++;
    let text;

    if (guess < secret){
      setGuidance(`Your guess ${guess} is too low`);
    } else if (guess > secret) {
      setGuidance(`Your guess ${guess} is too high`);
    } else {
      Alert.alert(`You guessed the number in ${guesses} guesses`);
      init();
    }

   }

  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{guidance}</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={input}
        onChangeText={text => setInput(text)}
      ></TextInput>
      <Button
        title='Guess'
        color='red'
        onPress={makeGuess}
      ></Button>
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
  text: {
    marginBottom: 10,
    fontSize: 20
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 100,
    height: 50,
    margin: 10

  }
});

