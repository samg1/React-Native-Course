import React from 'react'
import { Alert, Button, View } from 'react-native'
import prompt from 'react-native-prompt-android';
import { styles } from '../theme/appTheme'
import { HeaderTitle } from './HeaderTitle'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Mensaje de alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log("OnDismiss")
            }
        )
    }

    const showPrompt = () => {
        
        // Alert.prompt(
        //     'Esta Seguro?',
        //     'Esta accion no se puede revertir',
        //     ( valor: string ) => console.log('info: ', valor),
        //     'plain-text',
        //     'Hola Mundo'
        // )
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: '',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.globalMargin} >
            <HeaderTitle title="Alerts" />

            <Button
                title="Alerta"
                onPress={ showAlert } 
            />

            <Button
                title="Mosrar Prompt"
                onPress={ showPrompt }
            />

        </View>
    )
}
