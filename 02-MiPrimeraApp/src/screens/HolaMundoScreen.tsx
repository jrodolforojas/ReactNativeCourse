import React from 'react';
import { Text, View } from 'react-native';

export default function HolaMundoScreen() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 45,
              textAlign: 'center'
            }}>
              Hola Rodolfo</Text>
          </View>
    )
}

