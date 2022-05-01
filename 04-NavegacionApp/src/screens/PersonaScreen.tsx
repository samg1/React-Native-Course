import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//     id: number;
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

export const PersonaScreen = ({ navigation, route }: Props) => {

    // const params = route.params as RouterParams

    const {username} = useContext(AuthContext)

    const params = route.params

    useEffect(() => {

        navigation.setOptions({
            title: params.nombre
        })

    }, [])
    useEffect(() => {

        username(params.nombre)

    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>


        </View>
    )
}
