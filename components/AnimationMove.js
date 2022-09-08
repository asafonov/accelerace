import React, {useRef} from 'react'
import {StyleSheet, Animated, Easing, TouchableOpacity} from 'react-native'
import ms from '../constants/MainStyles'
import mc from '../constants/MainConstants'
import figmaConverter from '../config/styles'

const AnimationMove = props => {
    const slide = useRef(new Animated.Value(0)).current

    const startAnimation = () => {
        Animated.timing(slide, {
        toValue: 1,
        duration: props.speed ? props.speed : 1000,
        useNativeDriver: false,
        easing: Easing.ease
        }).start()
    }

    const moveY = slide.interpolate({
        inputRange: [0, 1],
        outputRange: [props.startPointY ? props.startPointY : 0, props.finishPointY ? props.finishPointY : 0]
    })

    const moveX = slide.interpolate({
        inputRange: [0, 1],
        outputRange: [props.startPointX ? props.startPointX : 0, props.finishPointX ? props.finishPointX : 0]
    })

    const animatedStyles = {
        transform: [{translateY: moveY}, {translateX: moveX}]
    }  

  return (
    <Animated.View style={[s.container, animatedStyles]} onLayout={startAnimation}>
      {props.children}
    </Animated.View>
  )
}

export default AnimationMove

const s = StyleSheet.create({
  container: {}
})
