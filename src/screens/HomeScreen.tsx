import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const HomeScreen = () => {

    const { peliculasEnCine, isLoadig } = useMovies();
    const { top } = useSafeAreaInsets();


    if ( isLoadig ) {
        return (
            <View style={{ flex: 1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator size='large' color="#0000ff" />
            </View>
        )
    }

    return (
        <View style={{
            marginTop: top + 20,
        }}>
            <MoviePoster
                movie={ peliculasEnCine[1] }
            />
        </View>
    )
}

