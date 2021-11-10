// Libraries
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';


function CustomButton({
  text,
  backgroundColor,
  borderColor,
  height,
  onPress,
  color,
  fontWeight,
  type,
  image
}) {

  /**
   * 
   */
  const renderButton = () => {
    switch (type) {
      case 'gradient':
        return (
          <TouchableOpacity
            onPress={onPress}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              onPress={onPress}
              colors={['#FEB130', '#FF7542', '#FF527C']}
              style={[
                styles.button,
                { borderColor: borderColor, height: height }
              ]}
            >
              <Text style={[styles.text, { color: color, fontWeight: fontWeight }]}>
                {text}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        );
        break;
      case 'image':
        return (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: backgroundColor, borderColor: borderColor, height: height }
            ]}
            onPress={onPress}
          >
            <Image style={styles.image} source={image} />
            <Text style={[styles.text, { color: color, fontWeight: fontWeight }]}>{text}</Text>
          </TouchableOpacity>
        );
        break;
      default:
        return (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: backgroundColor, borderColor: borderColor, height: height }
            ]}
            onPress={onPress}
          >
            <Text style={[styles.text, { color: color, fontWeight: fontWeight }]}>{text}</Text>
          </TouchableOpacity>
        );
    }
  }

  /**
   * 
   */
  return (
    <View>
      {renderButton()}
    </View>
  );
}

export default CustomButton;

/**
 * 
 */
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "100%",
    borderRadius: 50,
    borderWidth: 2,
    marginBottom: 20
  },

  text: {
    fontSize: 21,
    fontFamily: "QuicksandBold",
  },

  image: {
    height: 25,
    width: 30
  }
});