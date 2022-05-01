import { View, Text, StyleSheet, Image, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';


const screenHeight = Dimensions.get('screen').height

interface Props extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route, navigation }: Props) => {

  const { poster_path, title, original_title, id } = route.params as Movie

  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

  const { isLoading, cast, movieFull } = useMovieDetails(id)

  console.log({ isLoading })

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.posterImage}

        />
      </View>
      <View style={styles.marginContainer} >
        <Text style={styles.subTitle} >{original_title}</Text>
        <Text style={styles.title} >{title}</Text>
      </View>

      {
        isLoading
          ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
          : <MovieDetails movieFull={movieFull!} cast={cast} />
      }
      <TouchableOpacity
        style={styles.backbutton}
        onPress={ () => navigation.pop() }
      >
        <Icon
          color="white"
          name="arrow-back-outline"
          size={60}

        />

      </TouchableOpacity>


    </ScrollView>

  )
}

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
  imageContainer: {
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25

  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    color: 'black',
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  backbutton: {
    position: 'absolute',
    top: 10,
    left: 5
  }
});