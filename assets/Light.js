import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import Svg, {Circle, Rect, Path, G, Defs, ClipPath, Style, Filter, SvgCss} from 'react-native-svg'
import ms from '../constants/MainStyles'
import mc from '../constants/MainConstants'
import figmaConverter from '../config/styles'

const Light = props => {
  return (
    <View style={s.container}>
      <Svg 
        xmlns="http://www.w3.org/2000/svg"
        style={[s.abs, s.abs2, {shadowColor: props.color ? props.color : mc.white}]}>      
      <Circle
        cx="5"
        cy="15"
        r="5"
        fill={mc.white}/> 
      </Svg>
      <Svg 
        xmlns="http://www.w3.org/2000/svg"
        style={[s.abs, s.abs2, {shadowColor: props.color ? props.color : mc.white}]}>      
      <Circle
        cx="5"
        cy="15"
        r="5"
        fill={mc.white}/> 
      </Svg>
      <Svg 
        xmlns="http://www.w3.org/2000/svg"
        style={[s.abs, s.abs3, {shadowColor: props.color ? props.color : mc.white}]}>      
      <Circle
        cx="5"
        cy="15"
        r="5"
        fill={mc.white}/> 
      </Svg>
      <Svg 
        xmlns="http://www.w3.org/2000/svg"
        style={[s.abs]}>
      <Circle
        cx="5"
        cy="15"
        r="5"
        fill={mc.white}/>               
      </Svg>
    </View>
  )
}
export default Light

const s = StyleSheet.create({
  container: {
    width: 'auto',
    height: 25,
  },
  abs: {
    position: 'absolute'
  },
  abs2: {

    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 3 
  },
  abs3: {

    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 9,
    elevation: 3 
  },
});