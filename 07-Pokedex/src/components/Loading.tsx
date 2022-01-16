import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export const Loading = () => {
    return (
        <View style={searchScreenStyles.activityContainer}>
            <ActivityIndicator
                size={50}
                color="grey"
            />
            <Text>Loading</Text>
        </View>
    )
}

const searchScreenStyles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})