import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView, Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';




interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;
    const { movie, isLoading, cast } = useMovie(movieId);


    if (isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            {/* Header */}
            <MovieHeader
                originalTitle={movie!.originalTitle}
                title={movie!.title}
                poster={movie!.poster} />
            {/* Details */}
            <MovieDetails movie={movie!} cast={cast!} />
        </ScrollView>
    );
}

