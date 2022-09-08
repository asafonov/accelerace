import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import Svg, {Circle, Rect, Path, G, Defs, ClipPath, Style, Filter, Line} from 'react-native-svg'
import ms from '../constants/MainStyles'
import mc from '../constants/MainConstants'
import figmaConverter from '../config/styles'

const LineHorisontal = props => {
  return (
    <View style={s.container}>
      <Svg 
        xmlns="http://www.w3.org/2000/svg"
        style={[s.abs]}> 
      <Line x1="0" y1="0" x2="20" y2="0" 
        stroke={mc.white}
        strokeWidth={2}/>         
      </Svg>
      <Svg 
        xmlns="http://www.w3.org/2000/svg"
        style={[s.abs, s.abs2, {shadowColor: mc.white}]}>  
      <Line x1="0" y1="0" x2="20" y2="0" 
        stroke={mc.white}
        strokeWidth={2}/>        
      </Svg>
    </View>
  )
}
export default LineHorisontal

const s = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    left: 100,
    top: 100
  },
  abs: {
    position: 'absolute'
  },
  abs2: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 6 
  },
});