// Libraries
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";

// Components
import CustomButton from '../../components/Custom/CustomButton';
import CustomInput from '../../components/Custom/CustomInput';

function Confirmation({ navigation }) {

  /**
   * 
   */
  const onVerifyPress = () => {
    navigation.navigate('Play')
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
          Confirmation
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
          Enter the <Text style={styles.textVerify}>Verification Code</Text> sent to you by <Text style={styles.textVerify}>SMS</Text>
        </Text>
      </View>
      <View style={styles.codeInput}>
        <CustomInput
          placeholder="Confirm Code"
          border="#4D4D4D"
          borderWidth={1}
          secureTextEntry={true}
        />
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

export default Confirmation;

/**
 * 
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  main: {
    paddingLeft: 45,
    paddingRight: 45
  },

  welcomeText: {
    alignItems: "center",
    marginTop: 20
  },

  titleText: {
    color: "#4D4D4D",
    textAlign: "center",
    fontFamily: "QuicksandBold",
    fontSize: 30
  },

  verifyButton: {
    marginTop: 20,
    marginBottom: 20
  },

  resendCodeText: {
    fontFamily: "QuicksandBold",
    fontSize: 12,
    textDecorationLine: "underline",
    marginTop: 10,
    color: "#FF7542",
    textAlign: 'center'
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 25
  },

  image: {
    width: 146,
    height: 293
  },

  textContainer: {
    marginTop: 50,
    alignItems: "center",
  },

  text: {
    fontFamily: "QuicksandLight",
    fontSize: 15,
    color: "#4D4D4D"
  },

  textVerify: {
    fontFamily: "QuicksandBold",
  },

  codeInput: {
    marginTop: 20
  }
});