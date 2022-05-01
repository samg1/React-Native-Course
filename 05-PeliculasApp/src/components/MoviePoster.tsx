import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native'


interface Props {
    movie: Movie,
    height?: number,
    width?: number
}


export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const { poster_path } = movie

    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

    const navigation = useNavigation()


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 3,
                paddingBottom: 20,
                paddingHorizontal: 7,
            }}
            onPress={ () => navigation.navigate('DetailScreen' as never, movie as never) }
        >

            <View style={styles.imageContainer} >
                <Image
                    source={{ uri }}
                    style={styles.image}
                />

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        
        elevation: 19,
    },

    image: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    }

});