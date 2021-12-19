import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: SimplePokemon;
}
export const PokemonCard = ({ pokemon }: Props) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <TouchableOpacity
            activeOpacity={0.9}>
            <View style={{ ...styles.cardContainer, width: windowWidth * 0.4 }}>
                {/* Nombre del pokemon y ID */}
                <View >
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokeBallContainer}>

                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokeBallBackground}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokeBallContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        opacity: 0.5,
    },
    pokeBallBackground: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -20,
        bottom: -20,
    },
    pokemonImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -5,
        right: -8,
    }
})
