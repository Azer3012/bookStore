import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import helpers from '../../helpers/helpers';
import colors from '../../values/colors';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require('../../assets/images/book.png')}
        />
        <View style={styles.inputContainer}>
          <CustomInput placeholder={'User name'} />
        </View>
        <View style={styles.inputContainer}>
          <CustomInput placeholder={'Password'} password={true} />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            text={'Login'}
            color={colors.white}
            indicatorColor={colors.white}
          />
        </View>
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
});
