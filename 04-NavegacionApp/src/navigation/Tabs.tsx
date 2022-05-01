import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTab';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {

    return Platform.OS === 'ios' 
        ? <TabsIOS/>
        : <TabsAndroid/>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: colores.primary
        }}
        screenOptions={ ({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0
            }, 
            tabBarLabelStyle: {
                fontSize: 15
            }, 
            tabBarIcon: ({color, focused}) => {

                let iconName: JSX.Element = <Icon name="earth-outline" size={12} color='white' />
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = <Icon name="earth-outline" size={16} color='white' />
                    break
                    case 'Tab2Screen':
                        iconName = <Icon name="beer-outline" size={16} color='white' />
                    break
                    case 'StackNavigator':
                        iconName = <Icon name="aperture-outline" size={16} color='white' />
                    break
                }
        
                return <Text > { iconName }</Text>
            }
            
        })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Icons' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'TopTabs' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}



const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle= {{
            backgroundColor: 'white'
        }}
        screenOptions={ ({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0
            }, 
            tabBarLabelStyle: {
                fontSize: 15
            }, 
            tabBarIcon: ({color, focused, size}) => {

                let iconName: JSX.Element = <Icon name="earth-outline" size={size} color={colores.primary} />
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = <Icon name="earth-outline" size={size} color={colores.primary} />
                    break
                    case 'Tab2Screen':
                        iconName = <Icon name="diamond-outline" size={size} color={colores.primary} />
                    break
                    case 'StackNavigator':
                        iconName = <Icon name="extension-puzzle-outline" size={size} color={colores.primary} />
                    break
                }
        
                return <Text > { iconName }</Text>
            }
            
        })}

    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }} > texto1  </Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Iconos' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'TopTabs' }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />

    </BottomTabIOS.Navigator>
  );
}