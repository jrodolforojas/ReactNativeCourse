import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        /**
         * expand elements in an specific direction
         * default: 'column'
         * flexDirection: 'row'
         */

        /**
         * Difference between flexDirection: 'column-reverse' and justifyContent:'flex-end'
         * align first element at the last position
         * In order of screen: caja3,caja2,caja1
         * 
         * Justify content align content keeping the order
         * In order of screen: caja1,caja2,caja3
         */
        
        /**
         * Distribute your space to your children
         * space-*
         */
        alignItems: 'flex-end'
    },
    caja1: {
        // flex: 4, // 40% of screen
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2: {
        // flex: 4, // 40% of screen
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        // flex: 2, // 20% of screen
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    }
})