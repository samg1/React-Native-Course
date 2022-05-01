import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { menuItems } from '../data/menuData'
import { HeaderTitle } from '../components/HeaderTitle'






export const HomeScreen = () => {

  

  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 5
        }}
      />
    )
  }


  return (
    <View style={{ ...styles.globalMargin, flex: 1 }} >

      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => <HeaderTitle  title="Opciones de Menu" />}
        ItemSeparatorComponent={() => itemSeparator()}
        
      />

    </View>
  )
}