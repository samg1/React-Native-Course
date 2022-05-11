import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonScreen } from "../screens/PokemonScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { RootStackParams } from './Navigator';

const Stack = createStackNavigator<RootStackParams>();

export const TabSearch = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
        
    >
      <Stack.Screen name="HomeScreen" component={SearchScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}