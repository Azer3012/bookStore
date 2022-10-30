import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthPage, Login, Register } from '../pages'
import helpers from '../helpers/helpers'

import MainTab from './Tabs'
const Stack=createNativeStackNavigator()

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={helpers.screenOptions}>
        <Stack.Screen name='AuthPage' component={AuthPage}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name={"Main"} component={MainTab} options={{ gestureEnabled: false }} />
        
    </Stack.Navigator>
  )
}

export default Stacks

const styles = StyleSheet.create({})