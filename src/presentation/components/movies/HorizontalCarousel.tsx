import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';
import { useEffect, useRef } from 'react';


interface Props {
    movies: Movie[],
    title?: string,
    loadNextPage?: () => void
}
export const HorizontalCarousel = ({ title, movies, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {

        setTimeout(() => {
            isLoading.current = false
        }, 2000)
    }, [ movies ])


    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEndReached) return

        isLoading.current = true

        // cargar las siguientes peliculsa

        loadNextPage && loadNextPage()
    }

    return (
        <View style={{
            height: title ? 260 : 220,
        }}>
            {
                title && (

                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: 300,
                            marginLeft: 10,
                            marginBottom: 10
                        }}
                    >
                        {title}
                    </Text>
                )
            }

            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={140} heigth={200} />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
            />
        </View>
    );
}
