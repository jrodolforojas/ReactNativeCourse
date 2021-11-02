import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export default function FloatingActionButton({title, onPress, position = 'br'}: Props) {
    return (
        <View style={[
            styles.fabLocation, 
            (position == 'bl') ? styles.fabLocationBL : styles.fabLocationBR]}>

            <TouchableNativeFeedback
                background = {TouchableNativeFeedback.Ripple('#28425B', true, 30)} 
                onPress={ onPress} >
                <View style={styles.fab}>
                    <Text style = {styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>

        </View>
        
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
        
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',

    }
})
