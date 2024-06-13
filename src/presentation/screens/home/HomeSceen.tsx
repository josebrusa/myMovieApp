import { Text, View } from "react-native";
import { useMovies } from "../../hooks/useMovies";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying, popular, topRated, upComing } = useMovies()

    if (isLoading) {
        return (
            <View>
                <Text>Cargando...</Text>
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                {/* Principal Carousel */}
                <PosterCarousel movies={nowPlaying} />
                {/* Popular Carousel */}
                <HorizontalCarousel movies={popular} title="Populares" />
                {/* top rated Carousel */}
                <HorizontalCarousel movies={topRated} title="Top Rated" />
                {/* up-coming Carousel */}
                <HorizontalCarousel movies={upComing} title="Up Coming" />

            </View>
        </ScrollView>
    );
};
