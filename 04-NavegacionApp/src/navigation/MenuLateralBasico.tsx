import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();



export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen options={{ title: 'Home' }} name="Tabs" component={Tabs} />
            <Drawer.Screen options={{ title: 'Settings' }} name="SettingsScreen" component={SettingsScreen} />

        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>

            {/* Avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Menu */}
            <View style={styles.menuContainer}>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('Tabs')}>
                    <Text style={styles.menuIcono}><Icon name="pin-outline" size={30} color={colores.primary} /></Text>
                    <Text style={styles.menuTexto}> Navegacion Stack</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('SettingsScreen')}>
                    <Text style={styles.menuIcono}><Icon name="settings-outline" size={30} color={colores.primary} /></Text>
                    <Text style={styles.menuTexto}>  Ajustes</Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    )
}