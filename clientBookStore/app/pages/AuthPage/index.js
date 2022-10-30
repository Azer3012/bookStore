import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../values/colors';
import helpers from '../../helpers/helpers';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const AuthPage = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.book}
          source={require('../../assets/images/book.png')}
        />
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.subText}>read without limits</Text>
        <View style={styles.btnContainer}>
          <CustomButton onPress={()=>navigation.navigate('Register')} text={"create account"} bgColor={colors.white}/>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton onPress={()=>{
            navigation.navigate('Login')
          }}  borderColor={true} text={"Login"} bgColor={colors.white}/>
        </View>
      </View>
    </View>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  book: {
    width:helpers.px(205),
    height:helpers.px(180),
    tintColor:colors.gold
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    ...helpers.fontStyle('Regular', 32, colors.white),
    marginBottom: helpers.px(12),
  },
  subText: {
    ...helpers.fontStyle('Regular', 14, colors.white),
    marginBottom:helpers.px(25)
  },
  btnContainer:{
    width:helpers.px(195),
    marginBottom:helpers.px(16)

  }
});
