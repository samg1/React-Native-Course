import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'
import ImageColors from 'react-native-image-colors'
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native'

interface Props {
  pokemon: SimplePokemon
}

const windowWidth = Dimensions.get('window').width

{/* <FadeInImage
                        uri={item.picture}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    /> */}
export const PokemonCard = ({ pokemon }: Props) => {

  const [bgcolor, setBgcolor] = useState('grey')
  const isMounted = useRef(true)
  const navigator =  useNavigation()

  useEffect(() => {

    //IOS background
    //Android dominant
    ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
      .then(colors => {

        if (!isMounted.current) return;

        (colors.platform === 'android')
          ? setBgcolor(colors.dominant || 'grey')
          //@ts-ignore
          : setBgcolor(colors.background || 'grey')
      });
    return () => {
      isMounted.current = false
    }
  }, [])


  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={ () => navigator.navigate('PokemonScreen' as never, { simplePokemon: pokemon, color: bgcolor } as never) }
    >
      <View style={{
        ...styles.cardContainer,
        width: windowWidth * 0.4,
        backgroundColor: bgcolor
      }} >
        <Text style={styles.name} >
          {pokemon.name}
          {'\n# ' + pokemon.id}
        </Text>
        <View style={styles.pokebolaContainer} >
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>


        <FadeInImage
          uri={pokemon.picture}
          style={styles.pokemonImage}
        />

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5
  },
  pokebola: {
    width: 100,
    height: 100,
    right: -20,
    bottom: -20,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5
  }
});