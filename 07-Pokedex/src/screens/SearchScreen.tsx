import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading } from '../components/Loading'
import { PokemonCard } from '../components/PokemonCard'
import { SearchInput } from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { styles } from '../theme/theme'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const { isFetching, simplePokemonList } = usePokemonSearch()
    const [term, setTerm] = useState('')
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])

    useEffect(() => {

        if (term.length === 0) {
            return setPokemonFiltered([])
        }

        if (isNaN(Number(term))) {

            setPokemonFiltered(
                simplePokemonList.filter(
                    (poke) => poke.name.toLowerCase().includes(term.toLowerCase())
                )
            )
        } else {
            const pokemonByID = simplePokemonList.find( (poke) => poke.id === term )

            setPokemonFiltered(
                (pokemonByID) ? [pokemonByID] : []
            )
        }

    }, [term])



    if (isFetching) {
        return (
            <Loading />
        )
    }


    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20
        }} >
            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    marginTop: (Platform.OS === 'ios') ? top : top + 30
                }}

            />

            <FlatList
                data={pokemonFiltered}
                keyExtractor={(pokemon) => pokemon.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}

                ListHeaderComponent={(<Text style={
                    {
                        ...styles.texto,
                        ...styles.globalMargin,
                        ...styles.title,
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
                        marginHorizontal: 20
                    }}>
                    {term} </Text>)}

            />
        </View>
    )
}

