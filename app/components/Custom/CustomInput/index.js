import React from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from "react-native";

function CustomInput({ 
  placeholder,
  border,
  value,
  onChange,
  keyboardType,
  borderWidth,
  secureTextEntry,
  onChangeText,
  color,
}) {

  /**
   * 
   */
  return (
    <View>
      <TextInput 
        style={[styles.input, {
          borderColor: border, 
          borderBottomWidth: borderWidth, 
          color: color ? color : "#4D4D4D",
        }]}
        placeholderTextColor={color ? color : "#4D4D4D"}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default CustomInput;

/**
 * 
 */
const styles = StyleSheet.create({
  input: {
    height: 40,
    fontFamily: 'QuicksandRegular',
    fontSize: 17,
    marginBottom: 20
  }
});