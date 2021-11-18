// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';

function Verification({ navigation }) {

  /**
   * 
   */
  const onVerifyPress = () => {
    navigation.navigate('Confirmation')
  }

  /**
   * 
   */
  const handleResendPress = () => {
    alert('Resend')
  }

  /**
   * 
   */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.welcomeText}>
          <Text style={styles.titleText}>
            Verification
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/img/verify-img.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            We will send you a <Text style={styles.textVerify}>Verification Code</Text> to your phone number
          </Text>
        </View>
        <View style={styles.verifyButton}>
          <CustomButton
            text="Verify"
            height={52}
            onPress={onVerifyPress}
            color="#4D4D4D"
            borderColor="#4D4D4D"
            backgroundColor="#fff"
          />
          <Text
            style={styles.resendCodeText}
            onPress={handleResendPress}
          >
            Resend Code
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Verification;

/**
 * 
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingLeft: 50,
    paddingRight: 50
  },

  welcomeText: {
    alignItems: "center",
    marginTop: 40
  },

  titleText: {
    color: "#4D4D4D",
    textAlign: "center",
    fontFamily: "QuicksandBold",
    fontSize: 30
  },

  verifyButton: {
    marginTop: 20,
  },

  resendCodeText: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
    color: "#FF7542",
    textAlign: "center",
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 50
  },

  image: {
    width: 146,
    height: 293
  },

  textContainer: {
    marginTop: 50,
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
  },

  text: {
    fontFamily: "QuicksandLight",
    fontSize: 15,
    color: "#4D4D4D"
  },

  textVerify: {
    fontFamily: "QuicksandBold",
  }
});