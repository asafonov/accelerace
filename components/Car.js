import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput} from 'react-native'
import Svg, {Circle, Rect, Path} from 'react-native-svg'
import ms from '../constants/MainStyles'
import mc from '../constants/MainConstants'
import figmaConverter from '../config/styles'

const Car = props => {
  return (
    <View style={[s.container]}>
        <Text style={[ms.text, ms.textHint, ms.textWhite, props.minOrder && s.minOrderText]}>
            {props.text}
            <Text style={[ms.textGreen]}>{props.textAccent}</Text>
        </Text>
    </View>
  )
}

export default Car

const s = StyleSheet.create({
  container: {
    backgroundColor: mc.darkBlue,
    marginTop: figmaConverter(-7)
  },
  cart: {
    marginTop: figmaConverter(8)
  },
  lock: {
    backgroundColor: '#18436D'
  },
  minOrder: {
    backgroundColor: mc.secondaryYellow
  },
  minOrderText: {
    color: mc.textPrimary
  },
  containerIn: {
    flexDirection: 'row',
    alignItems: 'center',
    height: figmaConverter(50)
  },
  containerIco: {
    marginLeft: mc.wrapXS,
    marginRight: figmaConverter(10)
  }
})
