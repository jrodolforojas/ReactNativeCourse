import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../types/movie.interface';

interface Props {
    movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <View style={{
            width: 300,
            height: 420,
        }}>
            <View style={style.imageContainer}>
                <Image
                    source={{ uri }}
                    style={style.image}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        borderRadius:18,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
})