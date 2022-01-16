import { useEffect, useRef, useState } from 'react';
import { pokemonAPI } from '../api/pokemonAPI';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
        const newSimplePokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return { id, picture, name };
        });
        setSimplePokemonList(newSimplePokemonList);
        setIsFetching(false);
    }

    const loadPokemons = async () => {
        setIsFetching(true);
        const response = await pokemonAPI.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
        mapPokemonListToSimplePokemon(response.data.results);
        
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    return {
        isFetching,
        simplePokemonList,
    }
}
