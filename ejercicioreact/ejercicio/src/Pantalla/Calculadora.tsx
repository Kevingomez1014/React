import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculadora = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0); 
  const [resultado, setResultado] = useState(0); 

  const sum = () => {
    setResultado(numero1 + numero2);
  };

  const subtract = () => {
    setResultado(numero1 - numero2);
  };

  const multiply = () => {
    setResultado(numero1 * numero2);
  };

  const divide = () => {
    setResultado(numero1 / numero2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Result: {resultado}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        keyboardType="numeric"
        value={numero1.toString()} 
        onChangeText={(text) => setNumero1(parseFloat(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        keyboardType="numeric"
        value={numero2.toString()} 
        onChangeText={(text) => setNumero2(parseFloat(text))}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={sum} />
        <Button title="-" onPress={subtract} />
        <Button title="*" onPress={multiply} />
        <Button title="/" onPress={divide} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
});

export default Calculadora;
