import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {

  return (
    <NavigationContainer>
      <AppState>
        <MenuLateralBasico />
      </AppState>


    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App