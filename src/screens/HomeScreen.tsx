import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'


export const HomeScreen = () => {

    const { peliculasEnCine, isLoadig } = useMovies();


    if ( isLoadig ) {
        return (
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large' color="#0000ff" />  
            </View>
        )
    }

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

