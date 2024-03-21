import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FAB } from '../Componentes/FAB';

export const Contador = () => {

    const[contador, setContador] = useState(10);

  return (
    <View style={estilos.container }>
        <Text style={estilos.titulo}>
          Contador: {contador}
          </Text>

        <FAB 
            title="+1"
            onPress={() =>setContador(contador+1)}
            position="br"
        />
        <FAB 
            title="-1"
            onPress={() =>setContador(contador-1)}
            position="bl"
        />


      </View>
  )
}

const estilos = StyleSheet.create({

    container: {
        flex:1,
        justifyContent:'center'
    },
    titulo:{
        fontSize:40,
        textAlign:'center'
    }

})