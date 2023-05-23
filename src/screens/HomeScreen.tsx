import React from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// const windowWidth = Dimensions.get('window').width;
const { width: windowWidth } = Dimensions.get('window');

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

            {/* <MoviePoster
                movie={ peliculasEnCine[0] }
            />  */}
            <View style={{ height:440 }} >
                <Carousel 
                    data={ peliculasEnCine }
                    renderItem={ ({ item }: any ) => <MoviePoster
                        movie={ item }
                    /> }
                    sliderWidth={ windowWidth }
                    itemWidth={ 300 }
                /> 
            </View>
        </View>
    )
}

