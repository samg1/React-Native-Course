import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {


    const opacity = useRef(new Animated.Value(0)).current
    const top = useRef(new Animated.Value(0)).current


    const fadeIn = () => {
        Animated.timing(opacity,
            {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true
            }).start();
    };

    const fadeOut = () => {
        Animated.timing(opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
    };

    const startMovingPositon = (initPosition: number, duration: number = 3000) => {

        top.setValue(initPosition)

        Animated.timing(
            top,
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start()

    }

    return {
        fadeIn,
        fadeOut,
        top,
        opacity,
        startMovingPositon
    }
}
