import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthPage, Login, Register} from '../pages';
import helpers from '../helpers/helpers';
import MainTab from './Tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

const Stacks = () => {
  const [token, setToken] = useState(null);

  const getStorage = async () => {
    try {
      const response = await AsyncStorage.getItem('userInfo');
      const userInfo = JSON.parse(response);
      console.log(userInfo);
      setToken(userInfo.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(token);

  useEffect(() => {
   
    getStorage();
  }, []);

  return (
    <Stack.Navigator  screenOptions={helpers.screenOptions}>
      <Stack.Screen name="AuthPage" component={AuthPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name={'Main'}
        component={MainTab}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default Stacks;

const styles = StyleSheet.create({});
