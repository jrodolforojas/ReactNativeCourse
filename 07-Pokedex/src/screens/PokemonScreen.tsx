import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonDetails } from '../components/PokemonDetails';
import { usePokemon } from '../hooks/usePokemon';
// import { Icon } from 'react-native-vector-icons/Icon';
import { RootStackParams } from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon: pokemonFull } = usePokemon(id);

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>
                {/* Back button */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.pop()}
                    style={{
                        ...styles.backButton,
                        top: top + 5,
                    }}
                >
                    <Icon
                        name="arrow-back-outline"
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>

                {/* Pokemon Name */}
                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 40
                    }}
                >{name + '\n'}#{id}
                </Text>

                {/* White pokeball */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball} />

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage}
                />
            </View>

            {isLoading
                ? (
                    <View style={styles.loadingActivityIndicator}>
                        <ActivityIndicator
                            color={color}
                            size={50}
                        />
                    </View>
                )
                : <PokemonDetails pokemon={pokemonFull} />
            }




        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingActivityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})