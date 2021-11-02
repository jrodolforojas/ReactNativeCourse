import React, {useState} from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import FloatingActionButton from '../components/FloatingActionButton';

export default function ContadorScreen() {

    const [contador, setContador] = useState(0);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Counter: {contador}</Text>

            <FloatingActionButton 
                title = "-1"
                onPress = {() => setContador(contador - 1)}
                position= 'bl'/>

            <FloatingActionButton 
                title = "+1"
                onPress = {() => setContador(contador + 1)}
                position = 'br'/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',

    }
})