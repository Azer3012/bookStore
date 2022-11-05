import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import helpers from '../../helpers/helpers';
import colors from '../../values/colors';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { LoginValidateSchema } from '../validations/LoginValidateSchema';

import AsyncStorage from '@react-native-async-storage/async-storage';

const storage=async(data)=>{
  try {
    await AsyncStorage.setItem('userInfo',JSON.stringify(data))
  } catch (error) {
    console.log(error);
  }
}

const Login = () => {
  const navigation=useNavigation()

  

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(null)

  const validate=async(data)=>{

  
    try {
      const isValid=await LoginValidateSchema.validate({password,email})
      return isValid
    } catch (error) {
      console.log(error.errors);
      setError(error.path)
      return helpers.toast(error.errors);
    }
  }

  const login=async()=>{
    
    const data={email,password}

    const isValid=await validate(password,email)
    if(isValid){
      try {
        const response= await helpers.api().post("/login",data)

       
        // axios.post('http://192.168.100.35:3000/login',data)

      await  storage(response.data)
        
         

        

       

        navigation.navigate("Main")
      } catch (error) {
        console.log(error);
      }
    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../../assets/images/book.png')}
        />
        <View style={styles.inputContainer}>
          <CustomInput value={email} setValue={setEmail} placeholder={'Email'} />
        </View>
        <View style={styles.inputContainer}>
          <CustomInput value={password} setValue={setPassword} placeholder={'Password'} password={true} />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            text={'Login'}
            color={colors.white}
            indicatorColor={colors.white}
            onPress={login}
          />
        </View>
      </View>
      <View style={styles.loginOrRegister}>
        <Text style={styles.bottomText}>don't have an account yet ?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
          <Text style={styles.loginOrRegisterBtn}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: helpers.px(136),
    height: helpers.px(100),
    tintColor: colors.main,
    marginBottom: helpers.px(20),
  },
  inputContainer: {
    width: helpers.px(190),
    marginBottom: helpers.px(16),
  },
  btnContainer: {
    width: helpers.px(195),
    marginBottom: helpers.px(16),
  },
  loginOrRegister:{
    flexDirection:'row',
    alignItems:'center'
  },
  bottomText:{
    ...helpers.fontStyle("Regular",14)
  },
  loginOrRegisterBtn:{
    ...helpers.fontStyle('Bold',16,colors.main)
  }
});
