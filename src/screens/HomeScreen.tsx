import React from 'react'
import { ActivityIndicator, Dimensions, View, Text, FlatList, ScrollView } from 'react-native'

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';

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
        <ScrollView>
            <View style={{
                marginTop: top + 20
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
                        inactiveSlideOpacity={0.9}
                    /> 
                </View>

                {/* Slider principal */}
                
                <HorizontalSlider title='En Cine' movies={ peliculasEnCine }/>

            </View>
        </ScrollView>
    )
}

