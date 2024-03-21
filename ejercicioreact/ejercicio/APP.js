import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from './src/Componets/Header';
import { Timer } from './src/Componets/Timer';
import { Audio } from 'expo-av';

const colores = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];
const tiemposIniciales = [5, 15, 25]; 

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(tiemposIniciales[0]); 
  const [customTime, setCustomTime] = useState('ingrese el numero'); 
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0); 

  const [isActive, setIsActive] = useState(false);
  const [sound, setSound] = useState();

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking(prev => !prev);
      setTime(tiemposIniciales[currentTimeIndex]);
    }

    return () => clearInterval(interval);
  }, [isActive, time, currentTimeIndex]);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/006202921_prev.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }

  function handleStartStop() {
    playSound();
    setIsActive(!isActive);
  }

  function handleNextTimer() {
    if (currentTimeIndex < tiemposIniciales.length - 1) {
      setCurrentTimeIndex(prevIndex => prevIndex + 1);
      setTime(tiemposIniciales[currentTimeIndex + 1]);
      setIsActive(false);
      setIsWorking(false);
    }
  }

  function handleCustomTimeSubmit() {
    const customSeconds = parseInt(customTime, 10);
    if (!isNaN(customSeconds)) {
      setTime(customSeconds);
      setIsActive(false);
      setIsWorking(false);
    }
  }

  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: colores[currentTimeIndex] }
    ]}>
      <View style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: Platform.OS === "android" && 30
      }}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          currentTime={currentTimeIndex}
          handleNextTimer={handleNextTimer}
        />
        <Timer time={time} />

        <TouchableOpacity onPress={handleStartStop} style={styles.boton}>
          <Text style={{ color: "white", fontWeight: "bold" }}>{isActive ? "STOP" : "START"}</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>Custom Time (seconds):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter time"
            value={customTime}
            onChangeText={setCustomTime}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={handleCustomTimeSubmit} style={[styles.boton, { backgroundColor: "#007bff" }]}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Set Custom Time</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 33,
    fontWeight: "bold",
  },
  boton: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  }
});