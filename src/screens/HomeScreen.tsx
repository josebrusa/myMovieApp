import React from 'react'
import { ActivityIndicator, Dimensions, View, Text, FlatList } from 'react-native'

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
            {/* Carousel principal */}
            
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

            {/* Flst list populares */}

            <View style={{ backgroundColor:'red', height: 260 }} >
                <Text style={{ fontSize:30, fontWeight: 'bold', }} >Cartelera</Text>
                <FlatList 
                    data={ peliculasEnCine }
                    renderItem={ ({ item }: any ) => (
                            <MoviePoster movie={ item } width={ 140 } height={ 200 } />
                        ) }
                    keyExtractor={ (item) => item.id.toString() }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                />
            </View>
        </View>
    )
}

