import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { RootStackParams } from '../navigation/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ route, navigation }: Props) => {

  const { simplePokemon, color } = route.params
  const { id, name, picture } = simplePokemon
  const { top } = useSafeAreaInsets()

  const { isLoading, pokemon: fullPokemon } = usePokemon(id)

  return (
    <View style={{ flex: 1 }} >
      {/* Header Container */}
      <View style={{
        ...styles.headerContainer,
        backgroundColor: color,
      }}>
        {/* BackButton */}
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 8
          }}
        >
          <Icon
            name="arrow-back-outline"
            color="white"
            size={30}
          />
        </TouchableOpacity>

        {/* Nombre del Pokemon */}
        <Text
          style={{
            ...styles.pokemonName,
            top: 40 + top
          }}
        >
          {name + `\n`}#{id}
        </Text>
        {/* Pokebola Blanca */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokebola}
        />
        <Image
          source={{ uri: picture }}
          style={styles.pokemonImage}
        />

      </View>
      {/* Detalles y Loading */}
      {

        isLoading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator
              color={color}
              size={50}
            />
          </View>
        )
        : <PokemonDetails pokemon={ fullPokemon! } />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokebola: {
    width: 250,
    height: 250
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});