import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void
}

export const FAB = ({ title, onPress, position = 'br' }: Props) => {
    return (
        <TouchableOpacity style={
            (position === 'bl')
                ? estilos.fabLocationBl
                : estilos.fabLocationBr
        }
            onPress={onPress}
        >
            <View style={estilos.fab}>
                <Text style={estilos.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}

const estilos = StyleSheet.create({

    fabLocationBr: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBl: {
        position: 'absolute',
        bottom: 125,
        left: 125
    },
    fab: {
        backgroundColor: '#FF8C00',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        color: '#483D8B',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    }

})
