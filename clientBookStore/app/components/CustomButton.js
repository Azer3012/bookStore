import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import helpers from '../helpers/helpers';
import colors from '../values/colors';

const CustomButton = ({
  text,
  loading,
  color,
  onPress,
  bgColor,
  indicatorColor,
  borderColor
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
       bgColor && {backgroundColor: bgColor},
       borderColor && {borderWidth:1,backgroundColor:colors.main,borderColor:colors.white}
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={indicatorColor} />
      ) : (
        <Text style={[styles.text, color && {color: color},borderColor && {color:colors.white}]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    height: helpers.px(30),
    borderRadius: helpers.px(20),
    backgroundColor:colors.main,
    justifyContent:'center',
    alignItems:'center'
    
  },
  text: {
    ...helpers.fontStyle('Regular', 16),
  },
});
