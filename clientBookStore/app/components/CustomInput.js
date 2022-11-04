import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import helpers from '../helpers/helpers';

import EyeIcon from 'react-native-vector-icons/Feather';

const CustomInput = ({placeholder, icon, password,onPress,value,setValue}) => {
  const [hide, setHide] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
      
      style={styles.input}
       placeholder={placeholder}
       secureTextEntry={hide}
       value={value}
       onChangeText={setValue}
       />
      {password && (
        <TouchableOpacity onPress={()=>setHide(!hide)}>
          <EyeIcon size={20} name={hide ? 'eye' : 'eye-off'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: helpers.px(40),
    borderRadius: helpers.px(20),
    flexDirection: 'row',
    paddingHorizontal: helpers.px(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input:{
    ...helpers.fontStyle("Regular",14)
  }
});
