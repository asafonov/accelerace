import React, {Component} from 'react'
import {Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput} from 'react-native'
import Svg, {Circle, Rect, Path} from 'react-native-svg'
import ms from '../constants/MainStyles'
import mc from '../constants/MainConstants'
import figmaConverter from '../config/styles'
import ProductListItem from './ProductListItem'

const Banner = props => {
  return (
    <View style={[s.container, props.cart && s.cart, props.lock && s.lock, props.minOrder && s.minOrder]}>
      <View style={[ms.wrapMain, s.containerIn]}>
        <View style={[s.containerIco]}>
          {!props.lock && !props.minOrder && (
            <Svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.70824 5.25664C3.67925 3.22216 4.88493 1.47962 6.62248 0.702819C6.97339 0.546859 6.86842 0.00499973 6.48452 0.00100077C6.46252 1.03039e-06 6.44153 1.0304e-06 6.41954 1.0304e-06C2.96143 -0.00199845 0.0271952 2.90625 0.000202189 6.36435C-0.0277905 9.93042 2.85446 12.8307 6.41454 12.8307C8.69994 12.8307 10.7024 11.634 11.8371 9.83345C12.0551 9.48854 11.6632 9.09664 11.3223 9.32158C10.5994 9.79546 9.74667 10.0854 8.82591 10.1194C6.11661 10.2193 3.74623 7.96793 3.70824 5.25664Z"
                fill="#9C9EB9"
              />
            </Svg>
          )}
          {!!props.lock && (
            <Svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M13.4232 7.44756V5.30056C13.4232 2.78756 11.3852 0.749556 8.87225 0.749556C6.35925 0.738556 4.31325 2.76656 4.30225 5.28056V5.30056V7.44756"
                stroke="#9C9EB9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.683 19.2495H5.042C2.948 19.2495 1.25 17.5525 1.25 15.4575V11.1685C1.25 9.07346 2.948 7.37646 5.042 7.37646H12.683C14.777 7.37646 16.475 9.07346 16.475 11.1685V15.4575C16.475 17.5525 14.777 19.2495 12.683 19.2495Z"
                fill="#9C9EB9"
                stroke="#9C9EB9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M8.86279 12.2026V14.4236"
                stroke="#18436D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          )}
          {!!props.minOrder && (
            <Svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M1.03879 11.476L4.56228 1.39933C4.64646 1.15859 4.85502 1 5.08742 1H9.8792C10.2855 1 10.5582 1.4635 10.3953 1.87718L8.32876 7.12427H12.4357C12.8819 7.12427 13.151 7.67323 12.9091 8.08987L5.58137 20.7102C5.23588 21.3053 4.40666 20.9056 4.56145 20.2186L6.33928 12.3289H1.56393C1.16772 12.3289 0.895279 11.8864 1.03879 11.476Z"
                stroke="#333333"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </Svg>
          )}
        </View>
        <Text style={[ms.text, ms.textHint, ms.textWhite, props.minOrder && s.minOrderText]}>
          {props.text}
          <Text style={[ms.textGreen]}>{props.textAccent}</Text>
        </Text>
      </View>
    </View>
  )
}

export default Banner

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
