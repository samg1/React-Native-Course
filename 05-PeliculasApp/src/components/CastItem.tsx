import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`


    return (

        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                    />
                )
            }


            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black'}} >
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 18, opacity: 0.7, color: 'black' }} >
                    {actor.character}
                </Text>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
        marginLeft: 20,
        paddingRight: 15,
        paddingTop: 2
    },
    actorInfo: {
        marginTop: 5,
        marginLeft: 10
    }
});