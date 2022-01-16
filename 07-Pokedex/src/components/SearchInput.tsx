import React, { useEffect, useState } from 'react'
import { Platform, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncedValue } from '../hooks/useDebouncedValue'

interface Props {
    style?: StyleProp<ViewStyle>;
    onDebounce: (value: string) => void;
}

export const SearchInput = ({ style, onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('');

    const debouncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue])

    return (
        <View style={{ ...styles.container, ...style as any }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder="Search pokemon"
                    style={{ ...styles.textInput, top: Platform.OS === 'ios' ? 0 : 2 }}
                    autoCapitalize="none"
                    value={textValue}
                    onChangeText={setTextValue}
                    autoCorrect={false} />

                <Icon
                    color="grey"
                    size={25}
                    name="search-outline" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    }
})
