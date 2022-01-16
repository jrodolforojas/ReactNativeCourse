import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { styles } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        if (searchTerm.length === 0) {
            return setFilteredPokemons([]);
        }

        // if the search item is not a number 
        // its because the user is searching by pokemon name
        if (isNaN(Number(searchTerm))) {
            // apply filter
            setFilteredPokemons(simplePokemonList.filter((pokemon) =>
                pokemon.name
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
            ));
        }
        else { // search by pokemon ID
            const pokemonFound = simplePokemonList.find((pokemon) => pokemon.id === searchTerm);
            pokemonFound !== undefined
                ? setFilteredPokemons([pokemonFound])
                : setFilteredPokemons([])
        }
    }, [searchTerm])

    if (isFetching) {
        return <Loading />
    }
    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20
        }}>
            <SearchInput
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: Platform.OS === 'ios' ? top : top + 10,
                }}
                onDebounce={setSearchTerm}
            />

            <FlatList
                data={filteredPokemons}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                // header
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        top: top + 5,
                        paddingBottom: 10,
                        marginTop: top + 60,
                    }}>{searchTerm}</Text>
                )}
            />
        </View>
    )
}

