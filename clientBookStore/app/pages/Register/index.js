import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import helpers from '../../helpers/helpers'
import colors from '../../values/colors'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const Register = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <Image
        style={styles.image}
        source={require('../../assets/images/book.png')}
      />
      <View style={styles.inputContainer}>
        <CustomInput placeholder={'First Name'} />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput placeholder={'Last Name'} />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput placeholder={'Email'} />
      </View>
      <View style={styles.inputContainer}>
        <CustomInput placeholder={'Password'} password={true} />
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          text={'Sign up'}
          color={colors.white}
          indicatorColor={colors.white}
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