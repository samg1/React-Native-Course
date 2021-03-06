import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const { width } = Dimensions.get('window')

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

    const { setMainColors } = useContext(GradientContext)

    const getPosterColors = async (index: number) => {

        const { poster_path } = nowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${poster_path}`
        const [primary = '', secondary = '', third = ''] = await getImageColors(uri)

        setMainColors({primary, secondary, third})

    }
    
    useEffect(() => {
      if( nowPlaying.length > 0 ){
          getPosterColors(0)
      }
      
    }, [nowPlaying])
    



    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1, justifyContent: 'center', alignContent: 'center'
                }}
            >
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/* Carousel */}
                    <View style={{
                        height: 440,
                        paddingTop: 10,
                    }} >
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }) => <MoviePoster movie={item} />}
                            sliderWidth={width}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}
                        />

                    </View>

                    {/* Populares */}
                    <HorizontalSlider title="Populares" movies={popular} />
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    <HorizontalSlider title="Upcoming" movies={upcoming} />

                </View>

            </ScrollView>
        </GradientBackground>

    )
}