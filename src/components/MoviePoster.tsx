import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterfaces'


interface Props  {
    movie: Movie;
}

export const MoviePoster = ( { movie }: Props ) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    return (
        <View style={{
            width: 300,
            height: 400,

        }}>
            <Text>{movie.title}</Text>
            
                <Image 
                    source={{ uri }}
                    style={ styles.image }
                />
            
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius:18
    }
})

