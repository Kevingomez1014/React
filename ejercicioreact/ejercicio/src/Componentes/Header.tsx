import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const opciones = ["Pomodoro", "Descanso Corto", "Descanso Largo"];

export const Header = ({ setTime,currentTime,setCurrentTime }) => {
    
    function handlePress(index)
    {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60)
    }

    return (
        <View style={{flexDirection:"row"}}>
            {/* <Text>pomodoro</Text> */}
            {opciones.map((item,index) => (
                <TouchableOpacity 
                key={index}
                onPress={()=>handlePress(index)}
                style={[styles.itemStyle,
                    currentTime !== index && {borderColor:"transparent"}
                ]}>
                    <Text style={{fontWeight: "bold"}}>{item}</Text>
                </TouchableOpacity>
            ))}

            {/* <Text>{time}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
      borderWidth: 3,
      padding:5,
      width:"33%",
      marginVertical: 20,
      borderRadius:15,
      alignItems:"center",
      borderColor:"white"
    },
  });
