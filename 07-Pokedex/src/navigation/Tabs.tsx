import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabSearch } from './Tab2';

const Tab = createBottomTabNavigator();



export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',

            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255, 0.92)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 0 : 60
                }
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: "List",
                    tabBarIcon: ({ color }) => <Icon name="list-outline" color={color} size={25} />,
                }}
                name="Navigator"
                component={Navigator} />
            <Tab.Screen
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color }) => <Icon name="search-outline" color={color} size={25} />,
                }}
                name="SearchScreen" component={TabSearch} />
        </Tab.Navigator>
    );
}