import { Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying, popular, topRated, upComing, popularNextPage } = useMovies()

    if (isLoading) {
        return (
            <FullScreenLoader />
        )
    }
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                {/* Principal Carousel */}
                <PosterCarousel movies={nowPlaying} />
                {/* Popular Carousel */}
                <HorizontalCarousel movies={popular} title="Populares" loadNextPage={popularNextPage} />
                {/* top rated Carousel */}
                <HorizontalCarousel movies={topRated} title="Top Rated" />
                {/* up-coming Carousel */}
                <HorizontalCarousel movies={upComing} title="Up Coming" />

            </View>
        </ScrollView>
    );
};
