import { View, Text, FlatList } from 'react-native';
import React from 'react'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface'
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}  >
                <View style={{ flexDirection: 'row' }} >
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text> {movieFull.vote_average} </Text>

                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>

                </View>


                {/* Historia */}
    
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' ,color: 'black'  }} >
                    Historia
                </Text>

                <Text style={{ fontSize: 16, textAlign: 'justify', color: 'black' }} >
                    {movieFull.overview}
                </Text>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }} >
                    Presupuesto
                </Text>

                <Text style={{ color: 'black' }}> {currencyFormatter.format(movieFull.budget, { code: 'USD' })} </Text>
                {/* Casting */}

            </View>

            <View style={{ marginTop: 10, marginBottom: 60 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, color: 'black'  }}>
                    Actores
                </Text>
                <FlatList
                    data={cast}
                    keyExtractor={ (item) => item.id.toString() }
                    renderItem={ ({ item }) => <CastItem actor={ item } /> }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10, height: 100 }}
                />


            </View>
        </>
    )
}