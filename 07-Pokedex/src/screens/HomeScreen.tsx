import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/theme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
    const { simplePokemonList, loadPokemons } = usePokemonPaginated()

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <PokemonCard pokemon={item} />
                    )}

                    //infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListHeaderComponent={(<Text style={
                        [styles.texto, {
                            top: top + 20,
                            marginBottom: top + 20
                        },
                        styles.globalMargin, styles.title]}>
                        Pokedex </Text>)}

                    ListFooterComponent={
                        <ActivityIndicator style={{ height: 100 }}
                            size={20}
                            color="grey"
                        />
                    }
                />
            </View>

        </>
    )
}
