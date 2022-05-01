import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

  const { opacity, top, fadeIn, fadeOut, startMovingPositon } =useAnimation()

  return (
    <View style={styles.container} >

      <Animated.View style={{
        ...styles.purpleBox,
        opacity,
        transform:[{
          translateY: top
        }]
      }} />

      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPositon( -100 )
        }}
      />
      <Button
        title="FadeOut"
        onPress={fadeOut}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  purpleBox: {
    backgroundColor: "#5856D6",
    width: 150,
    height: 150

  }
});