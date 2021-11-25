// Libraries
import React from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from "react-native";
import { TextInput as Input } from 'react-native-paper';

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
  width,
  type,
  fontSize,
  icon
}) {

  /**
   * 
   */
  const renderInput = () => {
    switch (type) {
      case 'icon':
        return (
          <Input           
            right={<Input.Icon name={icon} color="#FEB130" />}
            style={[styles.input, {
              borderColor: border,
              borderBottomWidth: borderWidth,
              color: color ? color : "#4D4D4D",
              fontFamily: fontFamily ? fontFamily : "QuicksandRegular",
              width: width ? width : "100%",
              backgroundColor: "#fff",
              fontSize: fontSize ? fontSize : 17,
            }]}
            color={color}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            multiline={multiline}
            numberOfLines={numberOfLines}
            theme={{ colors: { primary: '#fff',underlineColor:'transparent',}}}
          />
        );
        break;
      default:
        return (
          <TextInput
            style={[styles.input, {
              borderColor: border,
              borderBottomWidth: borderWidth,
              color: color ? color : "#4D4D4D",
              fontFamily: fontFamily ? fontFamily : "QuicksandRegular",
              width: width ? width : "100%",
              fontSize: fontSize ? fontSize : 17
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
        );
    }
  }

  /**
   * 
   */
  return (
    <View>
      {renderInput()}
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