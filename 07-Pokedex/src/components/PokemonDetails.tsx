import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}

export const PokemonDetails = ({ pokemon }: Props) => {


    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            {/* Types */}
            <View
                style={{
                    ...styles.container,
                    marginTop: 370
                }}
            >
                <Text style={styles.title} >
                    Types
                </Text>
                <View
                    style={{ flexDirection: 'row' }}
                >
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }

                </View>
                {/* Peso */}

                <Text style={styles.title} >
                    Peso
                </Text>
                <Text style={styles.regularText} >
                    {pokemon.weight} kg
                </Text>
            </View>



            {/* Sprites */}
            <View
                style={{
                    ...styles.container,
                    marginTop: 20
                }}
            >
                <Text style={styles.title} >Sprites</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />

            </ScrollView>
            {/* Habilidades */}
            <View
                style={styles.container}
            >
                <Text style={styles.title} >
                    Base Skills
                </Text>
                {
                    pokemon.abilities.map(({ ability }) => (
                        <Text
                            style={{
                                ...styles.regularText,
                                marginRight: 10
                            }}
                            key={ability.name}
                        >
                            {ability.name}
                        </Text>
                    ))
                }

            </View>
            {/* Movimientos */}
            <View
                style={styles.container}
            >
                <Text style={styles.title} >
                    Moves
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={move.name}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Stats */}
            <View
                style={styles.container}
            >
                <Text style={styles.title} >
                    Stats
                </Text>
                <View >
                    {
                        pokemon.stats.map((stat, i) => (
                            <View key={stat.stat.name + i} style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150
                                    }}
                                    key={stat.stat.name}
                                >
                                    {stat.stat.name}
                                </Text>

                            </View>

                        ))
                    }
                </View>
                {/* Sprite Final */}
                <View style={{ marginBottom:60 , alignItems: 'center' }} >
                    <FadeInImage
                        uri={ pokemon.sprites.front_default }
                        style={ styles.basicSprite }
                    />

                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20
    },
    regularText: {
        fontSize: 19,
        color: 'black',

    },
    basicSprite: {
        width: 100,
        height: 100
    }
});