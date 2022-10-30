import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthPage, Login, Register } from '../pages'


const Stack=createNativeStackNavigator()

const Stacks = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='AuthPage' component={AuthPage}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        
    </Stack.Navigator>
  )
}

export default Stacks

const styles = StyleSheet.create({})