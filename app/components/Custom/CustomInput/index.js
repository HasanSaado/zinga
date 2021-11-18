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
  multiline,
  numberOfLines,
  fontFamily,
  width
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
          fontFamily: fontFamily ? fontFamily : "QuicksandRegular",
          width: width ? width : "100%"
        }]}
        placeholderTextColor={color ? color : "#4D4D4D"}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
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
    fontSize: 17,
    marginBottom: 20
  }
});