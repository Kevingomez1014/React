import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Timer = ({time}) => {

    const FormatoTiempo=`${Math.floor(time / 60).toString().padStart(2,"0")}:${(time % 60).toString().padStart(2,"0")}`;

  return (
    <View style={estilos.container}>
        <Text style={estilos.time}> {FormatoTiempo}</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
    container:{
        flex:0.3,
        justifyContent:"center",
        backgroundColor: "#F2F2F2",
        padding:15,
        borderRadius:15,
    },
    time:{
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333333"

    }
})