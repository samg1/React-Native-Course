import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, Platform, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

    const { onChange, form, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='Text Input' />

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su Nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su E-Mail"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='dark'

                        />
                        <View style={stylesScreen.switchRow}>
                            <Text style={stylesScreen.switchText}> Suscribirme </Text>
                            <CustomSwitch isOn={isSuscribed} onChange={ (value) => onChange(value, 'isSuscribed') } />
                        </View>

                        <TextInput
                            style={stylesScreen.inputStyle}
                            placeholder="Ingrese su telefono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <View style={{ height: 100 }} />

                    </View>

                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switchText: {
        fontSize: 25
    }
});