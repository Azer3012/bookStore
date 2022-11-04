import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useReducer, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import helpers from '../../helpers/helpers'
import colors from '../../values/colors'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

import axios from 'axios'
import { RegisterSchema } from '../validations/RegisterValidation'


const Register = () => {
  const navigation=useNavigation()

  const [firstName,setFirstName]=useState('')
  const [lastName,setLasttName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [repeatPassword,setRepeatPassword]=useState('')

  const [error,setError]=useState(null)


  const validate = async data => {
    try {
      const isValid = await RegisterSchema.validate(data);
      return isValid;
    } catch (error) {
      // setError(error.path);
      console.log(error.errors);
      setError(error.path)
      return helpers.toast(error.errors);
    }
  };
  

  const register=async()=>{

    const data={firstName,lastName,email,password}
    
    const isValid = await validate({name:firstName,surname:lastName,email,password,repeatPassword});
    if(isValid){
      try {
        const response=await axios.post('http://192.168.100.35:3000/register',data)
        navigation.navigate('Login')
      } catch (error) {
        console.log({error});
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
        <CustomInput value={firstName} setValue={setFirstName} placeholder={'First Name'} />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput value={lastName} setValue={setLasttName} placeholder={'Last Name'} />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput value={email} setValue={setEmail} placeholder={'Email'} />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput value={password} setValue={setPassword} placeholder={'Password'} password={true} />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput value={repeatPassword} setValue={setRepeatPassword} placeholder={'Repeat Password'} password={true} />
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          text={'Sign up'}
          color={colors.white}
          indicatorColor={colors.white}

          onPress={register}
        />
      </View>
    </View>
    <View style={styles.loginOrRegister}>
      <Text style={styles.bottomText}>don't have an account yet? </Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.loginOrRegisterBtn}>Log In</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Register

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
})