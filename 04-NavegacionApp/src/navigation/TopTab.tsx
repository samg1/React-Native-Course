import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({route}) =>({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary
                },
                tabBarStyle: {
                    shadowColor: 'transparent',
                    elevation: 0
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({color, focused}) => {

                    let iconName: JSX.Element = <Icon name="earth-outline" size={12} color={colores.primary} />
                    switch (route.name) {
                        case 'Chat':
                            iconName = <Icon name="chatbox-outline" size={16} color={colores.primary} />
                        break
                        case 'Contacts':
                            iconName = <Icon name="person-outline" size={16} color={colores.primary} />
                        break
                        case 'Albums':
                            iconName = <Icon name="albums-outline" size={16} color={colores.primary} />
                        break
                    }
            
                    return <Text style={{ color }}> { iconName }</Text>
                },
                
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}