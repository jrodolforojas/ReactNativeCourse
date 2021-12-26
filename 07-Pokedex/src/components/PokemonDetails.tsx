import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
            showsVerticalScrollIndicator={false}
        >
            {/* Types and weight*/}
            <View
                style={{
                    ...styles.container,
                    marginTop: 370,
                }}>
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                key={type.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.regularText}>{pokemon.weight} kg</Text>

            </View>

            {/* Sprites */}
            <View
                style={styles.container}>
                <Text style={styles.title}>Sprites</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>

            {/* Abilities */}
            <View style={styles.container}>
                <Text style={styles.title}>Abilities</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                key={ability.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Moves */}
            <View style={styles.container}>
                <Text style={styles.title}>Moves</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                key={move.name}
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Stats */}
            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat, index) => (
                            <View key={stat.stat.name + index}
                                style={{ flexDirection: 'row' }}>
                                <Text
                                    key={stat.stat.name}
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150,
                                    }}
                                >
                                    {stat.stat.name}
                                </Text>
                                <Text style={{
                                    ...styles.regularText,
                                    fontWeight: 'bold',
                                }}>
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>
                <View style={{
                    marginBottom: 30,
                    alignItems: 'center',
                }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 18,
    },
    basicSprite: {
        width: 100,
        height: 100,
    }
})
