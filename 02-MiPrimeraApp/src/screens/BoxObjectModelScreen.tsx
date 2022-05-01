import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1 
  },
  title: {
    fontSize: 20,
    borderWidth: 5,
    margin: 10,
    paddingHorizontal: 117,
    paddingVertical: 20
    // backgroundColor: 'red',

  }
});
