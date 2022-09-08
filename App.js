import React, {Component, useState, useRef, useEffect} from 'react'
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native'
import ms from './constants/MainStyles'
import mc from './constants/MainConstants'
import figmaConverter from './config/styles'
import Car from './assets/Car'
import Tree from './assets/Tree'
import House from './assets/House'
import Light from './assets/Light'
import LineVertical from './assets/LineVertical'
import AnimationMove from './components/AnimationMove'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={[styles.scroll]}>
        <View style={[styles.road]}>
          <View style={[styles.roadVerticals]}>
            <LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/>
            <LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/>
            <LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/>
          </View>
          <View style={[styles.lights, styles.lightsLeft]}>
            <Light/><Light/><Light/><Light/><Light/><Light/>
          </View>
          <View style={[styles.lights, styles.lightsRight]}>
            <Light/><Light/><Light/><Light/><Light/><Light/>
          </View>
        </View>
        <View style={[styles.house]}>
        <Tree color={mc.green}/>
          <House color={mc.orange} vertical/><Tree color={mc.green}/>
          <House color={mc.orange} vertical/><Tree color={mc.green}/>
          <House color={mc.orange} vertical/><Tree color={mc.green}/>
        </View>
        <View style={[styles.road, styles.roadHorisontals]}>
          <View style={[styles.roadVerticals]}>
            <LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/>
            <LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/>
            <LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/><LineVertical/>
          </View>
        </View>
        <View style={[styles.car, {top: '30%', left: '30%'}]}>
          <AnimationMove startPointY={200} finishPointY={0} startPointX={10} finishPointX={110} speed={1000}>
            <Car color={mc.yellow} main/>
          </AnimationMove>
        </View>
        <View style={[styles.car, {top: '20%', left: '45%'}]}>
          <AnimationMove startPointY={600} finishPointY={330} finishPointX={-50} speed={2000}>
            <Car color={mc.red}/>
          </AnimationMove>
        </View>
        <View style={[styles.car, {top: '60%', left: '45%'}]}>
          <AnimationMove startPointY={1200} finishPointY={150} startPointX={-100} speed={1000}>
            <Car color={mc.green}/>
          </AnimationMove>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mc.backgroundField,
  },
  scroll: {
    flex: 1
  },
  road: {
    position: 'absolute',
    left: '30%',
    width: '30%',
    height: '100%',
    backgroundColor: mc.backgroundField,
    shadowColor: mc.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6 
  },
  roadVerticals: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',    
  },
  roadHorisontals: {
    transform: [{ rotate: "90deg" }], display: 'none'
  },
  lights: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between'
  },
  lightsLeft: {
    left: -15,
  },
  lightsRight: {
    right: -5, 
    alignItems: 'flex-end'
  },
  house: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between'
  },
  car: {
    position: 'absolute',
    width: 50,
  }
});
