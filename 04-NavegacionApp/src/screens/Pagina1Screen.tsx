import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles, colores } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {

    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            ...styles.burger,
            backgroundColor: colores.primary,
          }}
          onPress={() => navigation.toggleDrawer()}
          activeOpacity={ 0.1}
       >

          <Text style={{ 
            textAlignVertical:'center'
            }}>
              <Icon name="menu-outline" size={30} color='white' /></Text>
        </TouchableOpacity>
      )
    })

  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title} >Pagina1Screen</Text>
      <Button
        title='Ir a pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 18,
        color: 'black',
        marginLeft: 5
      }}>Navegar con argumentos</Text>
      <View
        style={{ flexDirection: 'row' }}
      >
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'blue'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >

          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'green'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >

          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}
