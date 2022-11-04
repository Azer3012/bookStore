import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MMKV } from 'react-native-mmkv'
const Home = () => {

  const storage=new MMKV()

  const token=storage.getString("token")
  console.log(token);
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})