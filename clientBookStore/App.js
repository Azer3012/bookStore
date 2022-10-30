import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Stack from './app/stacks/Stacks'

const App = () => {
  return (
   <NavigationContainer>
    <Stack/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})